import { createContext, useContext, useReducer, useState } from 'react';
import PropTypes from "prop-types";
import sampleMonthlyDate from '../utils/sampleMonthlyData.json';
import { useDate } from "./DateContext.jsx";

// 1. Context 생성
export const AccountBookContext = createContext(); // 상태 데이터 저장 Context
export const AccountBookDispatchContext = createContext(); // 상태 변경 함수 저장 Context

// 2. 초기 상태 정의 (현재 날짜와 이전 달 날짜로, 총 2달치 데이터를 초기 반환)
const getInitialAccountBooks = (selectedDate) => {
    const yearMonth = parseInt(
        `${selectedDate.getFullYear().toString().slice(2)}${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}`
    );

    const prevDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1);
    const prevYearMonth = parseInt(
        `${prevDate.getFullYear().toString().slice(2)}${(prevDate.getMonth() + 1).toString().padStart(2, '0')}`
    );

    const initialIncome = sampleMonthlyDate.income.filter(
        item => item.yearMonth === yearMonth || item.yearMonth === prevYearMonth
    ).map(item => ({ ...item }));

    const initialExpend = sampleMonthlyDate.expend.filter(
        item => item.yearMonth === yearMonth || item.yearMonth === prevYearMonth
    ).map(item => ({ ...item }));

    if (!initialIncome.some(item => item.yearMonth === yearMonth)) {
        initialIncome.push({ yearMonth, details: [] });
    }

    if (!initialIncome.some(item => item.yearMonth === prevYearMonth)) {
        initialIncome.push({ yearMonth: prevYearMonth, details: [] });
    }

    if (!initialExpend.some(item => item.yearMonth === yearMonth)) {
        initialExpend.push({ yearMonth, details: [] });
    }

    if (!initialExpend.some(item => item.yearMonth === prevYearMonth)) {
        initialExpend.push({ yearMonth: prevYearMonth, details: [] });
    }

    return {
        income: initialIncome,
        expend: initialExpend
    };
};

// 새로운 데이터 로드 및 병합 함수
export const loadMoreAccountBooks = async (dispatch, targetDate) => {
    const yearMonth = parseInt(
        `${targetDate.getFullYear().toString().slice(2)}${(targetDate.getMonth() + 1).toString().padStart(2, '0')}`
    );

    const newIncome = sampleMonthlyDate.income.filter(item => item.yearMonth === yearMonth).map(item => ({ ...item })) || [];
    const newExpend = sampleMonthlyDate.expend.filter(item => item.yearMonth === yearMonth).map(item => ({ ...item })) || [];

    dispatch({ type: 'LOAD_MORE', newIncome, newExpend });
};

const calculateCategorySums = (details) =>
    details.reduce((acc, item) => {
        if (item.category) {
            acc[item.category] = (acc[item.category] || 0) + (item.amount || 0);
        }
        return acc;
    }, {});

const filterDetailsByYearMonth = (data, yearMonth) =>
    data
        .filter(entry => String(entry.yearMonth) === String(yearMonth))
        .flatMap(entry => entry.details);

const getMonthWeekNumber = (dateString) => {
    const date = new Date(dateString);
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    const dayOfMonth = date.getDate();
    return Math.ceil((dayOfMonth + dayOfWeek) / 7);
};

const calculateWeeklySumsByCategory = (filteredData, category) => {
    const weeklySums = {};

    filteredData.forEach(item => {
        if (item.category === category) {
            const weekNumber = getMonthWeekNumber(item.date);
            if (!weeklySums[weekNumber]) {
                weeklySums[weekNumber] = 0;
            }
            weeklySums[weekNumber] += item.amount;
        }
    });

    return weeklySums;
};

// 3. Reducer 함수 정의
const reducer = (state, action) => {
    const { income, expend } = state;

    switch (action.type) {
        case 'ADD': {
            const { newAccountBook } = action;
            return { income: [...income, newAccountBook], expend: [...expend, newAccountBook] };
        }

        case 'UPDATE': {
            const { updateAccountBook } = action;
            const updatedAccountBooks = income.map(accountBook => accountBook.yearMonth === updateAccountBook.yearMonth ? { ...updateAccountBook } : accountBook);
            return { income: updatedAccountBooks, expend: updatedAccountBooks };
        }

        case 'DELETE': {
            const { yearMonth } = action;
            const deletedAccountBooks = income.filter(accountBook => accountBook.yearMonth !== yearMonth);
            return { income: deletedAccountBooks, expend: deletedAccountBooks };
        }

        case 'READ_TOTAL': {
            const { yearMonth } = action;
            const readTotalIncome = income.filter(accountBook => accountBook.yearMonth === yearMonth);
            const readTotalExpend = expend.filter(accountBook => accountBook.yearMonth === yearMonth);
            return { income: readTotalIncome, expend: readTotalExpend };
        }

        case 'FILTER_BY_CATEGORY_AND_YEAR': {
            const { yearMonth } = action;
            const filteredDetails = filterDetailsByYearMonth(expend, yearMonth);
            const categorySums = calculateCategorySums(filteredDetails);
            const filteredCategoryData = Object.entries(categorySums).map(([category, totalAmount]) => ({
                category,
                totalAmount,
            }));
            return {
                ...state,
                filteredCategoryData,
            };
        }

        case 'CALCULATE_PERCENTAGES': {
            const { yearMonth } = action;
            const filteredDetails = filterDetailsByYearMonth(expend, yearMonth);
            const categorySums = calculateCategorySums(filteredDetails);

            const totalExpenditure = Object.values(categorySums).reduce((acc, curr) => acc + curr, 0);
            const categoryPercentages = Object.entries(categorySums)
                .map(([category, amount]) => ({
                    category,
                    totalAmount: amount,
                    percentage: totalExpenditure > 0 ? ((amount / totalExpenditure) * 100).toFixed(2) : 0,
                }))
                .sort((a, b) => b.totalAmount - a.totalAmount);

            return {
                ...state,
                categoryPercentages,
                totalExpenditure,
            };
        }

        case 'CALCULATE_WEEKLY_SUMS': {
            const { yearMonth, category } = action;
            const filteredDetails = filterDetailsByYearMonth(expend, yearMonth);
            const weeklySums = calculateWeeklySumsByCategory(filteredDetails, category);

            return {
                ...state,
                weeklySums,
            };
        }

        case 'LOAD_MORE': {
            const { newIncome, newExpend } = action;
            return {
                income: [...income, ...newIncome.filter(item => !income.some(incomeItem => incomeItem.yearMonth === item.yearMonth))],
                expend: [...expend, ...newExpend.filter(item => !expend.some(expendItem => expendItem.yearMonth === item.yearMonth))]
            };
        }

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

// 4. Provider 컴포넌트 생성
export const AccountBookProvider = ({ children }) => {
    const { selectedDate } = useDate();
    const initialAccountBooks = getInitialAccountBooks(selectedDate);
    const [accountBooks, dispatch] = useReducer(reducer, initialAccountBooks);

    return (
        <AccountBookContext.Provider value={accountBooks}>
            <AccountBookDispatchContext.Provider value={dispatch}>
                { children }
            </AccountBookDispatchContext.Provider>
        </AccountBookContext.Provider>
    );
};

AccountBookProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// 5. 커스텀 훅 생성
export const useAccountBooks = () => useContext(AccountBookContext);
export const useAccountBooksDispatch = () => useContext(AccountBookDispatchContext);