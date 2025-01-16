import {useDate, useDateDispatch, useHandleDateChange} from "../../contexts/DateContext.jsx";
import prevBtn from "../../assets/images/vector-left-gray-icon.png";
import nextBtn from "../../assets/images/vector-right-gray-icon.png";

/**
 * 헤더 날짜 컴포넌트
 * - 가능 범위: 2024.08 ~ 2025.01
 */
export const SelectedDate = () => {
    const {selectedDate} = useDate();   // 현재 선택된 날짜
    const dispatch = useDateDispatch(); // 날짜 변경 dispatch
    const {handleMovePrevDate, handleMoveNextDate} = useHandleDateChange();

    const movePrevDate = () => handleMovePrevDate(selectedDate, dispatch); // 이전 달로 이동
    const moveNextDate = () => handleMoveNextDate(selectedDate, dispatch); // 다음 달로 이동

    // 날짜 형식 변환 (YYYY.MM)
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${year}.${month}`;
    }

    return (
        <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="dark-mode-light-gray text-[#3C3C3C] text-[16px] weight-600">
                우리 REAL 가계부
            </h1>
            <div className="flex flex-row items-center justify-center gap-2">
                <button className="p-2 cursor-pointer" onClick={movePrevDate}>
                    <img id="prevDateBtn" src={prevBtn} alt="left icon"
                         className="w-[22px]"/>
                </button>
                <p id="nowDate" className="weight-600 text-[36px]">
                    {formatDate(selectedDate)}
                </p>
                <button className="p-2 cursor-pointer" onClick={moveNextDate}>
                    <img id="nextDateBtn" src={nextBtn} alt="right icon"
                         className="w-[22px]"/>
                </button>
            </div>
        </div>
    )
};