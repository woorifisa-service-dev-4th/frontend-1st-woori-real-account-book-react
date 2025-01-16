import {useDate} from "../../contexts/DateContext.jsx";
import {useAccountBooks} from "../../contexts/AccountBookContext.jsx";

export const TotalIncExpStatus = () => {
    const {selectedDate} = useDate(); // 현재 선택된 날짜
    const {income, expend} = useAccountBooks(); // 수입, 지출 내역

    // 현재 선택된 날짜의 연도, 월 (ex. 2021년 3월 => 2103)
    const currentYearMonth = `${selectedDate.getFullYear().toString().slice(2)}${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}`
    console.log(`currentYearMonth: ${currentYearMonth}`);

    // 해당 월의 총 수입 계산
    const totalIncome = income
        .filter((record) => record.yearMonth == currentYearMonth)
        .reduce((sum, record) => sum + record.details.reduce((subSum, detail) => subSum + detail.amount, 0), 0);
    console.log(`totalIncome: ${totalIncome}`);

    // 해당 월의 총 지출 계산
    const totalExpend = expend
        .filter((record) => record.yearMonth == currentYearMonth)
        .reduce((sum, record) => sum + record.details.reduce((subSum, detail) => subSum + detail.amount, 0), 0);
    console.log(`totalExpend: ${totalExpend}`);

    // 이전 달의 연도와 월 계산
    const prevDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1);
    const prevYearMonth = `${prevDate.getFullYear().toString().slice(2)}${(prevDate.getMonth() + 1).toString().padStart(2, '0')}`;
    console.log(`prevYearMonth: ${prevYearMonth}`);

    // 이전 달의 총 수입과 지출 계산
    const prevTotalIncome = income
        .filter((record) => record.yearMonth == prevYearMonth)
        .reduce((sum, record) => sum + record.details.reduce((subSum, detail) => subSum + detail.amount, 0), 0);

    const prevTotalExpend = expend
        .filter((record) => record.yearMonth == prevYearMonth)
        .reduce((sum, record) => sum + record.details.reduce((subSum, detail) => subSum + detail.amount, 0), 0);

    // 수입 및 지출 변화량
    const incomeChange = totalIncome - prevTotalIncome;
    const expendChange = totalExpend - prevTotalExpend;


    return (
        <div className="flex flex-row w-full justify-between">
            <div
                className="hover:bg-[#d9dfff] flex flex-col justify-between rounded-[16px] bg-[#E6EAFF] p-5 w-[327px] h-[180px]">
                <p className="black-text weight-600 text-[18px]"><span className="nowMonth">{selectedDate.getMonth() + 1}</span>월 총 수입</p>

                <div className="flex flex-col">
                    <p id="incomeChangeMessage"
                       className="dark-gray-text text-[#5E5E5E] text-[14px] weight-500">
                        {incomeChange > 0
                        ? `${prevDate.getMonth() + 1}월보다 ${incomeChange.toLocaleString()}원 늘었어요🥰`
                        : `${prevDate.getMonth() + 1}월보다 ${Math.abs(incomeChange).toLocaleString()}원 줄었어요😢`}
                    </p>
                    <p id="totalIncomeAmount" className="black-text weight-600 text-[26px]">{totalIncome.toLocaleString()}원</p>
                </div>
            </div>

            <div
                className="hover:bg-[#3959ff] flex flex-col justify-between rounded-[16px] bg-[#506CFF] p-5 w-[327px] h-[180px]">
                <p className="weight-600 text-[18px] text-white"><span className="nowMonth">{selectedDate.getMonth() + 1}</span>월 총 지출</p>

                <div className="flex flex-col">
                    <p id="expendChangeMessage"
                       className="text-[#5E5E5E] text-[14px] text-[#DBDBDB] weight-500">
                        {expendChange > 0
                        ? `${prevDate.getMonth() + 1}월보다 ${expendChange.toLocaleString()}원 늘었어요😢`
                        : `${prevDate.getMonth() + 1}월보다 ${Math.abs(expendChange).toLocaleString()}원 줄었어요🥰`}
                    </p>
                    <p id="totalExpendAmount" className="weight-600 text-[26px] text-white">{totalExpend.toLocaleString()}원</p>
                </div>
            </div>
        </div>
    );
};