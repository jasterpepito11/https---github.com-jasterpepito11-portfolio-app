import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";
import AnimatedLettersComponent from "../../components/AnimatedLettersComponent";

import PORTFOLIO_ICON from "@/assets/jpepito_logo.png";
import DARK_PORTFOLIO_ICON from "@/assets/jpepito_logo_inverted.png";
import PROFILE_IMG_OG from "@/assets/jl-og.png";
import PROFILE_IMG_ANIME from "@/assets/jl-animated.png";
import { ThemeContext } from '../../contexts/ContextManager';
import { THEME } from '../../utilities/dark-mode-toggler';
import './index.scss';
export default function ProfileComponent() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const name = "oshua Pepito,"
    const jobDesc = "I create and develop"
    const webDev = "web applications."
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [...name]
    const jobArray = [...jobDesc]
    const jobArray2 = [...webDev]

    useEffect(() => {
     setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 8000)
    }, [])
    const handleContact = () => {
        navigate("/contact");
    }
    return (
        <div className="profile relative mx-8 md:pt-0 pt-[80px] grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 h-full">
            <div className="col-span-1 xl:col-span-1 lg:col-span-2 lg:order-first lg:pl-0 lg:my-auto md:my-start md:pl-10 md:order-last lg:ml-10 sm:order-last">
                <h1 className="flex w-full h-18">
                    <span className={`${letterClass}` + ' text-white text-7xl '}>H</span>
                    <span className={`${letterClass} _12` + ' text-white text-7xl'}>i</span>
                    <span className={`${letterClass} _13` + ' text-white text-7xl'}>!</span>
                </h1>
                <div className="flex w-full h-18">
                    <span className={`${letterClass} _14` + ' text-white text-6xl align-bottom '}>I</span>
                    <span className={`${letterClass} _15` + ' text-white text-6xl align-bottom pr-5'}>'m</span>
                    <img className="logo" src={(theme == THEME.DARK) ? PORTFOLIO_ICON:  DARK_PORTFOLIO_ICON} alt="Developer Name" />
                    <AnimatedLettersComponent classWrapper="animated-container dark:text-yellow-300 text-gray-800 text-5xl align-bottom drop-shadow-lg" letterClass={letterClass} strArray={nameArray} idx={16}/>
                </div>
                <div className="flex w-full">
                    <AnimatedLettersComponent classWrapper="text-white text-5xl" letterClass={letterClass} strArray={jobArray} idx={20}/>
                </div>
                <div className="flex w-full">
                    <AnimatedLettersComponent classWrapper="text-white text-5xl" letterClass={letterClass} strArray={jobArray2} idx={20}/>
                </div>
                <div className="job-title flex w-full mt-2">
                    <span className="text-base text-slate-400">&lt;title&gt;<span className="text-yellow-300">Full-stack Web Developer</span>&lt;/title&gt;</span>
                </div>
                <div className="language flex w-full mt-2">
                    <span className="text-base text-slate-400">&lt;code lang="<span className="text-yellow-300">Java, JavaScript</span>"/&gt;</span>
                </div>
                <div className="location flex w-full h-18 mt-2">
                    <span className="text-base text-slate-400">&lt;address&gt;<span className="text-yellow-300">Philippines</span>&lt;/address&gt;</span>
                </div>
                <button onClick={handleContact} className="contact-btn bg-transparent text-xl hover:bg-cyan-500 text-yellow-300 font-semibold hover:text-white py-2 px-4 border dark:border-cyan-500 border-white hover:border-transparent rounded sm:mb-[80px]">Contact Me</button>
            </div>
            <div className="col-span-1 xl:col-span-1 lg:col-span-1 lg:my-auto lg:order-last md:my-auto md:order-first sm:order-first sm:mb-10">
                <div className="flex w-full justify-center">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="card-front">
                                <img className="rounded-full border border-gray-100 shadow-sm h-[300px]" src={PROFILE_IMG_ANIME} alt="front-end" />
                            </div>
                            <div className="card-back">
                                <img className="rounded-full border border-gray-100 shadow-sm h-[300px]" src={PROFILE_IMG_OG} alt="back-end" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}