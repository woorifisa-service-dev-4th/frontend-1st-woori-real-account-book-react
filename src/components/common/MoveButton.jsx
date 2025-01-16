import PropTypes from "prop-types";

export const MoveButton = ({content, moveUrl}) => {
    return (
        <button
            className="hover:bg-[#506CFF] hover:text-white rounded-[8px] border border-[#506CFF] text-[#506CFF] text-[14px] weight-600 px-[21px] py-[5px]"
            onClick={() => {
                location.href = "http://localhost:5173/" + moveUrl;
            }}>
            {content}
        </button>
    );
}

MoveButton.propTypes = {
    content: PropTypes.string.isRequired,
    moveUrl: PropTypes.string.isRequired
}