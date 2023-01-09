import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faSun as faDarkSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from 'react';
import { ThemeContext } from '../../ContextManager';
import { THEME } from '../../utilities/dark-mode-toggler';

export function DarkModeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [showDarkMoon, setShow] = useState(theme == THEME.DARK);
    

    return (
        <div className="justify-center items-center " >
            <button onClick={toggleTheme} className=' text-gray-700 hover:text-gray-900 transition ease-in-out origin-center hover:scale-110 hover:-rotate-45 dark:hover:rotate-45 dark:hover:scale-110 duration-150
            dark:hover:text-amber-200 dark:text-white'>
                {theme == THEME.DARK ? <FontAwesomeIcon icon={faDarkSun} size='2x' /> : <FontAwesomeIcon icon={faMoon} size='2x' />}
                </button>
        </div>
    )
}