import {useState} from "react";
import userIcon from "../../assets/images/user-profile-default.png";

export const UserInfo = () => {
    const [name, setName] = useState("홍길동");

    return (
        <div className="flex flex-row items-center gap-2">
            <img src={userIcon} alt="user profile" className="w-[30px] h-[30px]"/>
            <p className="weight-600">{name}</p>
        </div>
    );
};