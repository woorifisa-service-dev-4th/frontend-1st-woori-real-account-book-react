import React from 'react';
import PropTypes from 'prop-types';
import { useAccountBooks } from '../../contexts/AccountBookContext.jsx';

const CategoryBar = () => {
    const { weeklySums } = useAccountBooks();
    const maxBarHeight = 130;
    const maxAmount = Math.max(...Object.values(weeklySums || {}), 0);

    return (

        <div className="flex flex-row gap-1 bg-[#F9F8F8] rounded-[16px] w-full pt-10 pb-7">
            <div className="flex flex-row justify-center gap-6 w-full items-end">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((week) => {
                    const amount = weeklySums?.[week] || 0;
                    const barHeight = amount > 0 ? (amount / maxAmount) * maxBarHeight : 6;

                    return (
                        <div key={week} className="flex flex-col items-center gap-1">
                            <p className={`text-[14px] weight-600 ${amount > 0 ? 'text-[#506CFF]' : 'text-[#B6B6B6]'}`}> {
                                amount.toLocaleString()} 원</p>
                            <div className="w-[35px] rounded-[4px]" style={{ height: `${barHeight}px`, backgroundColor: amount > 0 ? '#506CFF' : '#B6B6B6' }}></div>
                            <p className="weight-500 text-[14px]">{new Date().getMonth() + 1}월 {week}째주</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

CategoryBar.propTypes = {
    category: PropTypes.string,
};

export default CategoryBar;
