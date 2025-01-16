import {UserInfo} from "../common/UserInfo.jsx";
import {SelectedDate} from "./SelectedDate.jsx";
import {NightDayMode} from "../common/NightDayMode.jsx";

const MainHeader = () => {

    return (
        <>
            <div className="flex flex-row justify-between w-full items-end h-[78px]">
                <UserInfo/>
                <SelectedDate/>

                <div className="flex flex-col items-end h-full justify-between">
                    <NightDayMode/>
                    {/*<div className="flex flex-row gap-2">*/}
                    {/*    <MoveButton content={"분석 보기"}*/}
                    {/*                moveUrl={"category-analysis.html"}/>*/}
                    {/*    <MoveButton content={"내역 등록"}*/}
                    {/*                moveUrl={"transaction-register.html"}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )

};

export default MainHeader;