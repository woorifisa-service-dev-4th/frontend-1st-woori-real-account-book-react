import React from 'react';

const DetailsTableContents = () => {
    return (
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
    );
};

export default DetailsTableContents;