import React from 'react';
import DetailsTableBtn from "./DetailsTableBtn";
import DetailsTableMonth from "./DetailsTableMonth";
import DetailsTableContents from "./DetailsTableContents";


const DetailsTable = () => {

    const [activeTab, setActiveTab] = React.useState("income"); // 버튼 income,expend
    const [filterType, setFilterType] = React.useState("income"); //필터 타입 (버튼에 의한 필터)
    const [details, setDetails] = React.useState([]); // 전체 내역 데이터
    const [detailCount, setDetailCount] = React.useState(0); // 내역 개수 (초기값:0)
    const [filteredDetails, setFilteredDetails] = React.useState([]); //필러링된 데이터 -> 보이게 되는 데이터

    const fetchDetails = async () => {
        try {
            const reponse = await fetch("../utils/sampleMonthlyData.jsom");
            const data = await reponse.json();
            setDetails(data);
            applyFilter(data, 'income');
        } catch (error) {
            console.error("데이터를 가져오는 데 실패했습니다.", error);
            }
        };

    const applyFilter = (data, type) => {
        const filtered = data[type];
        setFilteredDetails(filtered);
        setDetailCount(filtered.length);
    }

    

    }


    return (
        <>
            <DetailsTableBtn/>
            <DetailsTableMonth/>
            <DetailsTableContents/>
        </>
    );
};

export default DetailsTable;