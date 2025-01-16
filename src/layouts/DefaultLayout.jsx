import React from "react";
import lefticon from '../assets/images/woori-icon.png';


const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center pt-[50px]">
            <div className="min-w-[675px]">
                {/* 헤더 컴포넌트 자리

                */}
                <header>
                    <div className="flex flex-row justify-between w-full items-end h-[78px]">
                        <div className="flex flex-row items-center gap-2">
                            <img
                                src={lefticon}
                                alt="lefticon"
                                onClick={() => (window.location.href = 'main.html')}
                                className="w-[10px] pb-[15px] cursor-pointer"
                            />
                        </div>

                        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 text-center">
                            <h1 className="dark-mode-light-gray text-[#3C3C3C] text-[16px] weight-600">우리 REAL 가계부</h1>
                            <p className="weight-600 text-[36px]">{children}</p>
                        </div>
                    </div>
                </header>

                {/* 본문


                */}
                <main>{children}</main>
            </div>
        </div>
    );
};

export default DefaultLayout;
