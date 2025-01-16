import React, { useContext, useEffect } from "react";
import CircleChart from "./CircleChart.jsx";
import RankChart from "./RankChart.jsx";
import { useAccountBooksDispatch, useAccountBooks } from "../../contexts/AccountBookContext.jsx";
import { useDate } from "../../contexts/DateContext.jsx";

const CategoryCharts = () => {
    const dispatch = useAccountBooksDispatch(); // AccountBookContext의 dispatch 가져오기
    const { selectedDate } = useDate(); // 선택된 날짜 가져오기
    const { filteredData } = useAccountBooks(); // 필터링된 데이터 가져오기

    useEffect(() => {
        const year = selectedDate.getFullYear().toString().slice(2);
        const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
        const yearMonth = year + month;

        // 퍼센트 계산 요청
        dispatch({
            type: "CALCULATE_PERCENTAGES",
            yearMonth: yearMonth
        });

        // 해당 년, 월 데이터 요청
        dispatch({
            type: "FILTER_BY_CATEGORY_AND_YEAR",
            yearMonth: yearMonth
        });
    }, [selectedDate, dispatch]); // selectedDate가 변경될 때만 실행

    return (
        <div className="flex flex-row justify-center items-center gap-12 mt-6 w-full">
            <CircleChart data={filteredData} /> {/* 필터링된 데이터 전달 */}
            <div id="category-rank" className="flex flex-col space-y-4 justify-center items-start flex-grow w-full">
                <RankChart data={filteredData} /> {/* 필터링된 데이터 전달 */}
            </div>
        </div>
    );
};

export default CategoryCharts;
