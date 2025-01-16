import React, {useState} from 'react';
import DetailsTableBtn from "./DetailsTableBtn";
import DetailsTableMonth from "./DetailsTableMonth";
import DetailsTableContents from "./DetailsTableContents";


const DetailsTable = () => {
    return (
        <div className="w-full">
            <DetailsTableMonth />
            <DetailsTableContents/>
        </div>
    );
};

export default DetailsTable;