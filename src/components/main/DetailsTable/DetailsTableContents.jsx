import React, { useState, useContext } from "react";
import { DateContext } from "../../../contexts/DateContext";
import DetailsTableDaily from "./DetailsTableDaily.jsx";
import {useAccountBooks} from "../../../contexts/AccountBookContext.jsx";
import DetailsTableBtn from "./DetailsTableBtn.jsx";
import { categoryMapping } from "../../../constants/CategoryMapping.js";




const DetailsTableContents = () => {
    const [selectedType, setSelectedType] = useState("income");
    const { selectedDate } = useContext(DateContext); // 현재 선택된 날짜 가져오기
    const {income, expend} =useAccountBooks()

    // 현재 연-월 계산
    const selectedYearMonth = (selectedDate.getFullYear() % 100) * 100 + (selectedDate.getMonth() + 1);
    console.log("Selected Year-Month:", selectedYearMonth);



    //데이터 필터링
    const getFilteredData = (type) => {
        if (type == "income") {
            const incomeData = income.find((item) => item.yearMonth === selectedYearMonth);
            return incomeData ? incomeData.details : [];
        }

        if (type == "expend") {
            const expendData = expend.find((item) => item.yearMonth === selectedYearMonth);
            return expendData ? expendData.details : [];
        }

        return [];
    };

    const filteredData = getFilteredData(selectedType); // 선택된 타입에 따른 데이터 필터링



    console.log("Filtered Data:", filteredData);




    return (
        <div className="details-container">
            <DetailsTableBtn selectedType={selectedType} setSelectedType={setSelectedType}/>

            {/* 데이터 렌더링 */}
            {filteredData.length === 0 ? (
                <p className="text-gray-500 mt-4">
                    {selectedType === "income" ? "수입 내역이 없습니다." : "지출 내역이 없습니다."}
                </p>
            ) : (
                filteredData.map((detail, index) => (
                    <div key={index} className="details min-w-[675px] mt-4">
                        <h1 className="text-base weight-500">
                            <DetailsTableDaily key={index} data={detail}/>
                        </h1>

                        <div className="flex justify-between mt-4">
                            <ul className="flex flex-row">
                                <li
                                    className={`text-[14px] weight-600 border-2 px-[21px] py-[5px] rounded-[8px] ${
                                        detail.type === "income"
                                            ? "text-[#506CFF] border-[#506CFF]"
                                            : "text-[#D61F1F] border-[#D61F1F]"
                                    }`}
                                > {categoryMapping[detail.category] }
                                </li>
                                <li className="text-[14px] weight-600 px-[21px] py-[5px] text-center">
                                    {detail.title}
                                </li>
                                <li className="text-[14px] weight-600 px-[21px] py-[5px] text-[#484848]">
                                    {detail.method}
                                </li>
                            </ul>
                            <div
                                className={`text-[14px] weight-600 px-[21px] py-[5px] ${
                                    detail.type === "income" ? "text-[#506CFF]" : "text-[#D61F1F]"
                                }`}
                            >
                                {detail.amount.toLocaleString()}원
                            </div>
                        </div>
                        <div className="border-[#DBDBDB] border-t border-[1px] my-5"></div>
                    </div>
                ))
            )}
        </div>
    );
};

export default DetailsTableContents;