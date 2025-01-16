import React from 'react';

const DetailsTable = () => {
    return (
        <>
            {/* 아래 내용은 DetailsTableBtn에 해당하는 코드 ~25*/}
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


            {/* DetailsTableMonth 컴포넌트에 해당하는 코드 */}
            <h1 className="weight-600 text-[20px]"><span id="detailMonth">01</span>월 내역</h1>

            {/* DetailsTableContents 컴포넌트에 해당하는 코드 */}
            <div id="detailContentsDiv">
                <div className="min-w-[675px]">
                    <h1 className="text-base weight-500">2024.01.01</h1>
                    <div className="flex justify-between mt-4">
                        <ul className="flex flex-row">
                            <li className="text-[14px] weight-600 border-2 px-[21px] py-[5px] rounded-[8px] text-[#D61F1F] border-[#D61F1F]">
                                식비
                            </li>
                            <li className="text-[14px] weight-600 px-[21px] py-[5px] text-center">
                                짜장면
                            </li>
                            <li className="text-[14px] weight-600 px-[21px] py-[5px] text-[#484848]">
                                카드
                            </li>
                        </ul>
                        <div className="text-[14px] weight-600 px-[21px] py-[5px] text-[#D61F1F]">
                            -9,000원
                        </div>
                    </div>

                    <div className="border-[#DBDBDB] border-t border-[1px] my-5"></div>
                </div>
            </div>


        </>
    );
};

export default DetailsTable;