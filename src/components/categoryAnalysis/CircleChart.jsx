import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useAccountBooks } from "../../contexts/AccountBookContext.jsx";
import { categoryMapping } from "../../constants/categoryMapping"; // 상수 import
import { ChartColors } from "../../constants/ChartColors.js"; // 상수 import
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

// Chart.js 컴포넌트 등록
ChartJS.register(ArcElement, Tooltip, Legend);

const CircleChart = () => {
    const { categoryPercentages, totalExpenditure } = useAccountBooks();

    // 라벨 및 데이터 매핑
    const labels = categoryPercentages?.map(
        (item) => categoryMapping[item.category] || item.category
    ) || [];
    const dataPercentages = categoryPercentages?.map((item) =>
        parseFloat(item.percentage)
    ) || [];

    // 차트 데이터 설정
    const chartData = {
        labels: labels,
        datasets: [
            {
                data: dataPercentages,
                borderWidth: 2,
                hoverBorderWidth: 3,
                backgroundColor: ChartColors,
            },
        ],
    };

    // 차트 옵션 설정
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                position: "right",
            },
        },
        animation: {
            duration: 3500,
            easing: "easeInOutQuart",
        },
    };

    return (
        <div>
            <div className="flex flex-col w-full items-center">
                <p className="weight-600 text-[18px] text-left w-full mb-4">
                    카테고리별 지출 내역
                </p>
                <div id="chart-container" className="relative w-[246px] h-[245px] mt-4">
                    <Doughnut data={chartData} options={options}/>
                </div>

            </div>
        </div>
    );
};

export default CircleChart;
