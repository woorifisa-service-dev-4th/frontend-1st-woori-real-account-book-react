import React from 'react';
import {useDate} from "../../../contexts/DateContext.jsx";

const DetailsTableMonth = () => {
    const {selectedDate} = useDate();

    return (
        <div className="flex flex-row w-full items-start justify-start">
            <h1 className="weight-600 text-[20px]"><span id="detailMonth">{selectedDate.getMonth() + 1}</span>월 내역</h1>
        </div>
    );
};

export default DetailsTableMonth;