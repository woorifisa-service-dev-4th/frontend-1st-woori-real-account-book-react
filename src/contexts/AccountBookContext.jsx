import {createContext, useContext, useReducer} from 'react';
import PropTypes from "prop-types";
import sampleMonthlyDate from '../utils/sampleMonthlyData.json';
import {useDate} from "./DateContext.jsx";

// 1. Context 생성
export const AccountBookContext = createContext(); // 상태 데이터 저장 Context
export const AccountBookDispatchContext = createContext(); // 상태 변경 함수 저장 Context

// 2. 초기 상태 정의
const getInitialAccountBooks = (selectedDate) => {
    const yearMonth = parseInt(
        `${selectedDate.getFullYear().toString().slice(2)}${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}`
    );

    const initialIncome = sampleMonthlyDate.income.find(item => item.yearMonth === yearMonth) || {
        yearMonth,
        details: []
    };

    const initialExpend = sampleMonthlyDate.expend.find(item => item.yearMonth === yearMonth) || {
        yearMonth,
        details: []
    };

    return {
        income: [initialIncome],
        expend: [initialExpend]
    }
}

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

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

// 4. Provider 컴포넌트 생성
export const AccountBookProvider = ({ children }) => {
    const {selectedDate} = useDate();
    const initialAccountBooks = getInitialAccountBooks(selectedDate);
    const [accountBooks, dispatch] = useReducer(reducer, initialAccountBooks);

    return (
        <AccountBookContext.Provider value={accountBooks}>
            <AccountBookDispatchContext.Provider value={dispatch}>
                { children }
            </AccountBookDispatchContext.Provider>
        </AccountBookContext.Provider>
    )
}

AccountBookProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// 5. 커스텀 훅 생성
export const useAccountBooks = () => useContext(AccountBookContext);
export const useAccountBooksDispatch = () => useContext(AccountBookDispatchContext);