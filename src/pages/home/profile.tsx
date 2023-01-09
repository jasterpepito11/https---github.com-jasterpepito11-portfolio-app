
import { faLinkedin, faGithub, faJava, faAngular, faReact, faVuejs, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import { PROFILE_PIC_PLACEHOLDER } from '../../Constants';


export default function ProfileComponent() {
    return (
        <div className="relative pt-[80px] grid grid-cols-2 gap-4">
            <div className="col-span-1">
                <h1 className="flex w-full h-18">
                    <span className='rubber animated rubberBand text-white text-7xl'>H</span>
                    <span className='rubber animated rubberBand text-white text-7xl'>i</span>
                    <span className='rubber animated rubberBand text-white text-7xl'>!</span>
                </h1>
                <div className="flex w-full h-18">
                    <span className='rubber animated rubberBand text-white text-5xl align-bottom leading-[72px]'>I</span>
                    <span className='rubber animated rubberBand text-white text-5xl align-bottom leading-[72px]'>'</span>
                    <span className='rubber animated rubberBand text-white text-5xl align-bottom leading-[72px] pr-5'>m</span>
                    <span className='rubber animated rubberBand dark:text-cyan-600 text-gray-800 text-6xl drop-shadow-lg'>Joshua Pepito.</span>
                </div>
                <div className="flex w-full">
                    <span className='rubber animated rubberBand text-white text-5xl'>I create and develop </span>
                </div>
                <div className="flex w-full">
                    <span className='rubber animated rubberBand text-white text-5xl'>web applications using</span>
                </div>
            </div>
            <div className="col-span-1">
                <div className="animation-box relative h-[600px] w-[600px]">
                    <div className="stack angular">
                        <div className='relative'>
                            <FontAwesomeIcon icon={faAngular} size='6x' flip='horizontal' className='absolute text-white top-[5.25rem] -right-10' />
                        </div>
                    </div>
                    <div className="stack react">
                        <div className='relative'>
                            <FontAwesomeIcon icon={faReact} size='6x' flip='horizontal' className='absolute text-white top-[5.25rem] -right-10' />
                        </div>
                    </div>
                    <div className="stack vue">
                        <div className='relative'>
                            <FontAwesomeIcon icon={faVuejs} size='6x' flip='horizontal' className='absolute text-white top-[5.25rem] -right-10' />
                        </div>
                    </div>
                    <div className="stack java">
                        <div className='relative'>
                            <FontAwesomeIcon icon={faSquareJs} size='6x' className='absolute text-white top-[5.25rem] -right-10' />
                        </div>
                    </div>
                    <div className="shadow"></div>
                </div>
            </div>


        </div>
        // <div className="flex relative h-5/6 items-center justify-center border-grey-400">
        //     <div className='w-full max-w-md bg-gray-300 rounded-lg border mt-12 border-gray-200 shadow-md dark:bg-cyan-900 dark:border-gray-700'>
        //     <div className="w-full max-w-md bg-gradient-to-r from-cyan-500"></div>
        //         <div className="flex justify-end px-4 pt-10"></div>
        //         <div className="flex flex-col items-center pb-10">
        //             <img className="mb-3 w-40 h-40 rounded-full shadow-lg" src={PROFILE_PIC_PLACEHOLDER} alt="image" />
        //             <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Joshua Lester Pepito</h5>
        //             <span className="text-sm text-cyan-500 dark:text-purple-300">Full Stack Developer </span>
        //             <div className="flex mt-4 space-x-3 md:mt-6">
        //                 <div className='inline-flex space-x-0 group cursor-pointer focus:ring-purple-100 focus:ring-2'>
        //                     <div className="min-h-fit inline-flex items-center text-md font-medium text-center text-purple-700 bg-white hover:text-purple-500 hover:bg-gray-200 hover:border-purple-100 focus:ring-2 focus:outline-none  
        //       dark:text-white dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-500"><FontAwesomeIcon icon={faLinkedin} size='2x' /></div>
        //                     <div className="hidden group-hover:block ease-out hover:translate-x-1 transition-all rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-small px-1 rounded-l">
        //                         /joshua-lester-pepito
        //                     </div>
        //                 </div>

        //                 <button className="min-h-fit inline-flex items-center text-md font-medium text-center text-purple-700 bg-white hover:text-purple-500 hover:bg-gray-200 hover:border-purple-100 focus:ring-2 focus:outline-none  dark:text-white dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-500"><FontAwesomeIcon icon={faGithub} size='2x' /></button>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}