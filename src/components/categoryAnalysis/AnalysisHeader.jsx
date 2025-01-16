import React from 'react';
import { UserInfo } from "../common/UserInfo.jsx";
import { useDate } from "../../contexts/DateContext.jsx";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import
import buttonIcon from "../../assets/images/move-button.png";

const AnalysisHeader = () => {
    const { selectedDate } = useDate(); // 현재 선택된 날짜
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    console.log(month);
    const navigate = useNavigate(); // useNavigate 훅 사용

    return (
        <>
            <div className="flex flex-row justify-between w-full items-end h-[78px]">
                <div className="flex flex-row items-center gap-2">
                    <img
                        src={buttonIcon}
                        alt="left icon"
                        onClick={() => navigate('/')} // '/' 경로로 이동
                        className="w-[10px] pb-[15px] cursor-pointer"
                    />
                </div>
                <UserInfo />
                <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 text-center">
                    <h1 className="dark-mode-light-gray text-[#3C3C3C] text-[16px] weight-600">
                        우리 REAL 가계부
                    </h1>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <p className="weight-600 text-[36px]">{month}월 지출 분석</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnalysisHeader;
