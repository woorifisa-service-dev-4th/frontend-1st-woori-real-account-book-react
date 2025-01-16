import React, {useState, useEffect} from 'react';
import {useAccountBooks} from "../../../contexts/AccountBookContext";
import {useDate} from "../../../contexts/DateContext";

const DetailsTableBtn = ({ onTypeChange, selectedType, setSelectedType }) => {
    const { selectedDate } = useDate(); // 선택된 날짜 가져오기
    const accountBooks = useAccountBooks(); // 현재 상태 가져오기

    const [detailCount, setDetailCount] = useState(0);

    const yearMonth = parseInt(
        `${selectedDate.getFullYear().toString().slice(2)}${(selectedDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}`
    );

    const updateDetailCount = () => {
        const selectedData =
            selectedType === "income"
                ? accountBooks.income.find((item) => item.yearMonth == yearMonth)
                : accountBooks.expend.find((item) => item.yearMonth == yearMonth);

        setDetailCount(selectedData?.details.length || 0); // 데이터 개수 설정
    };

    const handleTypeChange = (type) => {
        setSelectedType(type);
        onTypeChange(type);
    };


    useEffect(() => {
        updateDetailCount();
    }, [selectedType, yearMonth]);


        return (
            <div className="min-w-[675px]">
                <div className="flex justify-between mt-4">
                    <div className="flex flex-row gap-2">
                        {/* ButtonGroup */}
                        <button id="incomeBtn"
                                className={`${
                                    selectedType === "income"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-black"
                                } rounded-[8px]  text-[14px] weight-600 px-[21px] py-[5px]`}
                                onClick={() => handleTypeChange("income")}
                        >
                            수입
                        </button>
                        <button id="expendBtn"
                                className={`${
                                    selectedType === "expend"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-black"
                                } rounded-[8px]  text-[14px] weight-600 px-[21px] py-[5px]`}
                                onClick={() => handleTypeChange("expend")}
                        >
                            지출
                        </button>
                    </div>
                    <p id="detailCounts"
                       className="text-[14px] weight-500 border-2 px-[12px] py-[4px] rounded-[8px] border-[#3D3D3D]">{detailCount}건
                    </p>
                </div>
            </div>
        );

};
export default DetailsTableBtn;