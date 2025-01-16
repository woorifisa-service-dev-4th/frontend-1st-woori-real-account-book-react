import React from "react";
import lefticon from '../assets/images/woori-icon.png';


const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center pt-[50px] pb-[80px] min-h-content">
            <div className="min-w-[675px]">
                <div className="flex flex-col items-center gap-14 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
