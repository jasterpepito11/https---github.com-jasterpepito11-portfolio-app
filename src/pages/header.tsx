import { useState, useEffect, useContext } from "react";
import  DarkModeToggler from "../utilities/dark-mode-toggler";
import { Link} from 'react-router-dom';
import { ThemeContext } from '../ContextManager';
import {PORTFOLIO_ICON, DARK_PORTFOLIO_ICON } from '../Constants';
import { THEME } from '../utilities/dark-mode-toggler';

export default function HeaderComponent() {
    const { theme } = useContext(ThemeContext);
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, []);

    const selectLink = (event: any) => {
        let selectedSection = document.getElementById(event.target.id + '-section');
        selectedSection && selectedSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function controlNav() {
        if(window.scrollY>10) {
            setShowNav((false));
        } else {
            
        }
    }
    return (
        <header className="flex fixed top-0 z-10 justify-center w-full px-12 h-[80px] border-b bg-gray-100 dark:bg-cyan-900">
            <nav className="flex  flex-row w-full relative bg-gradient-to-t from-white">
                {/* left side */}
                <div className="flex justify-center items-center">
                    <div className=" flex justify-start">
                        {theme == THEME.DARK ? <img className="hover:scale-110 cursor-pointer animated rubberBand" src={DARK_PORTFOLIO_ICON} alt="" width={60} height={60}  /> : 
                        <img className="hover:scale-110 cursor-pointer animated rubberBand" src={PORTFOLIO_ICON} alt="" width={60} height={60}  />}
                        </div>
                </div>
                {/* right side */}
                <div className="flex ml-auto">
                    <ul className="flex justify-between gap-x-8 items-center">
                        <li className="">
                            <Link id="about" onClick={selectLink} to="/about" className="text-base font-bold
                            active:text-white active:scale-150 active:text-lg active:underline active:underline-offset-4 active:decoration-white
                            hover:text-cyan-600 transition ease-in-out duration-0  hover:text-lg hover:duration-500  hover:underline hover:underline-offset-4 hover:decoration-cyan-600
                            dark:text-white dark:hover:text-neutral-500" 
                             aria-label="home">About</Link></li>
                        <li className="">
                            <Link id="experience" onClick={selectLink} to="/experience" className="text-base font-bold
                            active:text-white active:scale-150 active:text-lg active:underline active:underline-offset-4 active:decoration-white
                            hover:text-cyan-600 transition ease-in-out duration-0  hover:text-lg hover:hover:duration-500 hover:underline hover:underline-offset-4 hover:decoration-cyan-600                            dark:text-white dark:hover:text-neutral-500" 
                            aria-label="experience">Experience</Link></li>
                        <li className="">
                            <Link id="contact" onClick={selectLink} to="/contact" className="text-base font-bold
                            active:text-white active:scale-150 active:text-lg active:underline active:underline-offset-4 active:decoration-white
                            hover:text-cyan-600 transition ease-in-out duration-0  hover:text-lg hover:hover:duration-500 hover:underline hover:underline-offset-4 hover:decoration-cyan-600                            dark:text-white dark:hover:text-neutral-500" 
                             aria-label="contact">Contact</Link></li>
                        <li className="">
                            <a className="text-base font-bold
                            active:text-white active:scale-150 active:text-lg active:underline active:underline-offset-4 active:decoration-white
                            hover:text-cyan-600 transition ease-in-out duration-0  hover:text-lg hover:duration-500 hover:underline hover:underline-offset-4 hover:decoration-cyan-600                            dark:text-white dark:hover:text-neutral-500" 
                            href="#resume" aria-label="contact">Resume</a></li>
                    </ul>
                    <div className="flex"><DarkModeToggler /></div>
                
                </div>
                {/* hamburger */}
                <div></div>
            </nav>
        </header>
    )
}