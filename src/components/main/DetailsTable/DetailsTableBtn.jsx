import React from 'react';

const DetailsTableBtn = () => {
    return (
        <div className="min-w-[675px]">
            {/* FooterDetailMonth 컴포넌트 들어갈 위치 */}
            <div className="flex justify-between mt-4">
                <div className="flex flex-row gap-2">
                    {/* ButtonGroup */}
                    <button id="incomeBtn"
                            className="bg-[rgb(47,82,255)] text-white hover:bg-[rgb(47,82,255)] hover:text-white rounded-[8px]  text-[14px] weight-600 px-[21px] py-[5px]"
                            onClick="">수입
                    </button>
                    <button id="expendBtn"
                            className="bg-[#EEEEEE] text-[#282828] hover:bg-[rgb(47,82,255)] hover:text-white rounded-[8px]  text-[14px] weight-600 px-[21px] py-[5px]"
                            onClick=""> 지출
                    </button>
                </div>
                <p id="detailCounts"
                   className="text-[14px] weight-500 border-2 px-[12px] py-[4px] rounded-[8px] border-[#3D3D3D]">13건
                </p>
            </div>
        </div>
    );
};

export default DetailsTableBtn;