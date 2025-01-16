import React from 'react';

const DetailsTableDaily = ({data}) => {

    // 날짜 포맷팅 함수
    const formatDateWithLocale = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ko-KR"); // 한국어 형식
    };

    // 포맷된 날짜
    const formattedDate = formatDateWithLocale(data.date);

    return (
        <div>
            <p>{formattedDate}</p>
        </div>
    );
};

export default DetailsTableDaily;