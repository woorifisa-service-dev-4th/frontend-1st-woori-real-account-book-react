import React from 'react';
import { useAccountBooks } from "../../contexts/AccountBookContext.jsx";
import { categoryMapping } from "../../constants/CategoryMapping.js"; // 상수 import
import { ChartColors } from "../../constants/ChartColors.js"; // 상수 import


const RankChart = () => {

    const { filteredCategoryData } = useAccountBooks(); // 필터링된 데이터 가져오기

    if (!filteredCategoryData || filteredCategoryData.length === 0) {
        return <div>Loading....</div>; // 데이터가 없을 경우 처리
    }

    return (
        <div id="category-rank" className="space-y-2 mt-16">
            {filteredCategoryData.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center space-x-4 w-full">
                    <div
                        className="flex justify-center items-center rounded-md"
                        style={{
                            borderRadius: "8px",
                            background: ChartColors[index % ChartColors.length], // 색상 반복 적용
                            width: "100px",
                            height: "35px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <span className="text-white">
                            {index + 1}위 {categoryMapping[item.category] || item.category}
                        </span>
                    </div>
                    <span className="text-gray-700">
                        {item.totalAmount.toLocaleString()}원
                    </span>
                </div>
            ))}
        </div>
    );
};

export default RankChart;