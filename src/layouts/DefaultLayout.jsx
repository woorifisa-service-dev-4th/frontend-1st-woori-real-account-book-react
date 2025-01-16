import React from "react";
import PropTypes from "prop-types";


export const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center pt-[50px] min-h-content">
            <div className="min-w-[675px]">
                { children }
            </div>
        </div>
    );
};

DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};
