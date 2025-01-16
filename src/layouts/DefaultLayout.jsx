import React from "react";
import PropTypes from "prop-types";


export const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center pt-[50px] min-h-content">
            <div className="min-w-[675px]">
                <div className="flex flex-col items-center gap-14 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
