import nightModeIcon from "../../assets/images/night-mode-btn.png";
import dayModeIcon from "../../assets/images/day-mode-btn.png";
import {useTheme, useThemeDispatch} from "../../contexts/ThemeContext.jsx";

/**
 * 밤 낮 모드 변경 컴포넌트
 * - 밤 모드: nightMode 버튼 클릭 시, 밤 모드로 변경 (night-mode 클래스 toggle, nightMode hidden add, dayMode hidden remove)
 * - 낮 모드: dayMode 버튼 클릭 시, 낮 모드로 변경 (night-mode 클래스 toggle, nightMode hidden remove, dayMode hidden add)
 */
export const NightDayMode = () => {
    const isNightMode = useTheme();
    const toggleNightMode = useThemeDispatch();

    return (
        <>
            <button className="px-2 py-1"
                    onClick={toggleNightMode}>
                <img id="nightMode" className="w-[30px] h-[30px]" alt="night mode"
                     src={isNightMode ? nightModeIcon : dayModeIcon}/>
            </button>
        </>
    );
}