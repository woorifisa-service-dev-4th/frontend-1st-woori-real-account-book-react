import React, { useState, useEffect } from 'react';
import { useAccountBooksDispatch } from '../../contexts/AccountBookContext.jsx';
import { useDate } from '../../contexts/DateContext.jsx';

const CategoryButton = () => {
    const dispatch = useAccountBooksDispatch();
    const [activeCategory, setActiveCategory] = useState('food'); // 기본값: 식비

    const { selectedDate } = useDate();
    const currentYearMonth = `${selectedDate.getFullYear().toString().slice(2)}${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}`;

    const categories = [
        { id: 'food', label: '식비' },
        { id: 'shopping', label: '쇼핑' },
        { id: 'utilityBills', label: '공과금' },
        { id: 'transport', label: '교통비' },
        { id: 'congratulation', label: '경조사' }
    ];

    // 컴포넌트가 처음 렌더링될 때 식비 데이터를 계산
    useEffect(() => {
        dispatch({ type: 'CALCULATE_WEEKLY_SUMS', yearMonth: currentYearMonth, category: 'food' });
    }, [dispatch, currentYearMonth]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        dispatch({ type: 'CALCULATE_WEEKLY_SUMS', yearMonth: currentYearMonth, category });
    };

    return (
        <div className="flex flex-col gap-4 items-start w-full mt-20 mb-4">
            <p className="weight-600 text-[18px]">{selectedDate.getMonth() + 1}월 지출 내역</p>
            <div className="flex flex-wrap gap-4">
                {categories.map(({ id, label }) => (
                    <button
                        key={id}
                        className={`w-[65px] h-[29px] rounded-md ${
                            activeCategory === id
                                ? 'bg-[#506CFF] text-white'
                                : 'bg-[#EEEEEE] text-black hover:bg-[#506CFF] hover:text-white'
                        }`}
                        onClick={() => handleCategoryClick(id)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryButton;
