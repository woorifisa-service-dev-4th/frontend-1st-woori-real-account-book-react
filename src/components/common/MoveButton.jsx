import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

export const MoveButton = ({ content, moveUrl }) => {
    const navigate = useNavigate();

    return (
        <button
            className="hover:bg-[#506CFF] hover:text-white rounded-[8px] border border-[#506CFF] text-[#506CFF] text-[14px] weight-600 px-[21px] py-[5px]"
            onClick={() => navigate(moveUrl)} // React Router의 useNavigate로 이동
        >
            {content}
        </button>
    );
};


MoveButton.propTypes = {
    content: PropTypes.string.isRequired,
    moveUrl: PropTypes.string.isRequired
}