import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer
                className="w-full bg-[#F3F5FF] flex flex-col gap-1 items-center justify-center py-12 relative bottom-0">
                <div className="flex flex-row gap-1 items-center">
                    <img src="../assets/images/woori-icon.png" alt="woori icon" className="w-[15px] h-[15px]"/>
                    <p className="gray-text text-[#6A6A6A] text-[14px] weight-500">
                        우리 REAL 가계부
                    </p>
                </div>
                <p className="dark-gray-text text-[#6A6A6A] text-[12px] weight-400">
                    &copy; 2025 우리 REAL 가계부. 모든 권리 보유.
                </p>
            </footer>
        </div>
    );
};

export default Footer;