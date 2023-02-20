import { useState, useEffect, useContext } from "react";
import  DarkModeToggler from "../../utilities/dark-mode-toggler";
import { Link, useNavigate, NavLink} from 'react-router-dom';
import { ThemeContext } from '../../contexts/ContextManager';
import PORTFOLIO_ICON from "@/assets/jpepito_logo.png";
import DARK_PORTFOLIO_ICON from "@/assets/jpepito_logo_inverted.png";
import {RESUME_LINK } from '../../constants';
import { THEME } from '../../utilities/dark-mode-toggler';

const baseNavLinkClass = "text-base font-bold" +
" hover:text-cyan-600 transition"
+ " ease-in-out duration-0  hover:duration-500 hover:underline"
+ " hover:underline-offset-4 hover:decoration-cyan-600 dark:text-white dark:hover:text-cyan-400 ";
const activeClass = 'dark:text-cyan-400 underline-offset-4 underline text-cyan-400 dark:decoration-white decoration-cyan-400';
export default function HeaderComponent() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, []);

    const handleClick = () => {
        navigate("/");
    }
    const concatClasses = (baseClass: any, activeClass: any) => {
       return baseNavLinkClass.concat(activeClass);
    }
    return (
        <header className="flex fixed top-0 z-10 justify-center w-full px-4 h-[80px] border-b border-b-yellow-300 bg-white dark:bg-gray-700">
            <nav className="flex  flex-row w-full relative bg-gradient-to-t from-white">
                {/* left side */}
                <div className="flex justify-center items-center">
                    <div onClick={handleClick} className=" flex justify-start items-center">
                        {theme == THEME.DARK ? <img className="hover:scale-110 cursor-pointer animated rubberBand" src={DARK_PORTFOLIO_ICON} alt="" width={60} height={60}  /> : 
                        <img className="hover:scale-110 cursor-pointer animated rubberBand" src={PORTFOLIO_ICON} alt="" width={60} height={60}  />}
                        <span className="hover:text-white cursor-pointer lg:block md:hidden sm:hidden animated rubberBand font-bold text-xl tracking-tight font-source h-full dark:text-white text-cyan-600">Joshua's Portfolio</span>
                    </div>
                </div>
                {/* right side */}
                <div className="flex ml-auto">
                    <ul className="flex justify-between gap-x-8 items-center">
                        <li className="">
                            <NavLink id="about" to="/about" className={({ isActive }) => 
                                concatClasses(baseNavLinkClass, isActive ? activeClass : '')
                            } 
                             aria-label="home">About</NavLink></li>
                        <li className="">
                            <NavLink id="experience" to="/experience" className={({ isActive }) => 
                                concatClasses(baseNavLinkClass, isActive ? activeClass : '')
                            } aria-label="experience">Experience</NavLink></li>
                        <li className="">
                            <NavLink id="contact" to="/contact" className={({ isActive }) => 
                                concatClasses(baseNavLinkClass, isActive ? activeClass : '')
                            } aria-label="contact">Contact</NavLink></li>
                        <li className="">
                            <a className="text-base font-bold
                            active:text-white active:text-lg active:underline active:underline-offset-4 active:decoration-white
                            hover:text-cyan-600 transition ease-in-out duration-0  hover:text-lg hover:duration-500 hover:underline hover:underline-offset-4 hover:decoration-cyan-600                            dark:text-white dark:hover:text-cyan-400" 
                            href={RESUME_LINK} download="JoshuaPepitoCV2022.pdf" aria-label="contact">Resume</a></li>
                    </ul>
                    <div className="flex"><DarkModeToggler /></div>
                
                </div>
                {/* hamburger */}
                <div></div>
            </nav>
        </header>
    )
}