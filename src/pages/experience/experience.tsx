import { SetStateAction, Fragment, useState, useEffect } from 'react'
import { faLocationDot, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLettersComponent from '../../components/AnimatedLettersComponent';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Chip
} from "@material-tailwind/react";
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function ExperienceComponent() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [open, setOpen] = useState(1);
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000)
  }, [])
  return (
    <div className='grid grid-cols-6 grid-rows-6 grid-flow-col h-full pt-8 pl-8 pr-8'>
      <div className='col-span-6 col-start-1 md:row-span-1 sm:row-span-2'>
        <div className="flex w-full h-18 mt-8">
          <AnimatedLettersComponent
            classWrapper='text-white text-4xl'
            letterClass={letterClass}
            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
            idx={15} />
        </div>
      </div>
      <div className="lg:col-span-4 lg:row-span-5 lg:col-start-2 md:row-span-5 md:col-span-6 md:col-start-1 sm:row-span-4 sm:col-span-6 sm:col-start-1 text-yellow-300 text-sm align-top">
        <Fragment>
          <Accordion className='w-full' open={open === 1} animate={customAnimation} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            <AccordionHeader onClick={() => handleOpen(1)} className='text-base text-white dark:hover:text-cyan-600 hover:text-yellow-300' nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              <span className='text-white dark:hover:text-cyan-600 hover:text-yellow-300'>Senior Software Engineer @Novare Technologies Inc</span><span className='float-right'>2018-2022</span>
            </AccordionHeader>
            <AccordionBody className='border-b'>
              <div className='w-full'>
                <span className='text-white dark:text-cyan-600 px-2'><FontAwesomeIcon icon={faLocationDot} /></span>
                <span className='text-white dark:text-cyan-600 pr-8'>BGC Taguig, PH</span>
                <a className='group' href="https://www.novare.com.hk" target="_blank" rel='noopener noreferrer'>
                  <span className='text-white group-hover:text-blue-400 dark:text-cyan-600 px-2'><FontAwesomeIcon icon={faSquareArrowUpRight} /></span>
                  <span className='text-white group-hover:text-blue-400 dark:text-cyan-600 underline'>novare.com.hk</span>
                </a>
              </div>
              <div className='w-full mt-4'>
                <span className='text-yellow-300 text-base'>Developed back-end solutions for Telco client.</span>
              </div>
              <div className="w-full mt-4">
                <Chip className='bg-white text-cyan-700' value="Java" /> <Chip className='bg-white text-cyan-700' value="Springboot" /> <Chip className='bg-white text-cyan-700' value="MySQL" />
              </div>
              <div className='w-full mt-4'>
                <span className='text-yellow-300 text-base'>Created front-end solutions and microservice APIs for Banking Client's Online Banking Webapp.</span>
              </div>
              <div className="w-full mt-4">
                <Chip className='bg-white text-cyan-700' value="Angular" /> <Chip className='bg-white text-cyan-700' value="Java" /> <Chip className='bg-white text-cyan-700' value="Apigee" />
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion className='w-full' open={open === 2} animate={customAnimation} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            <AccordionHeader onClick={() => handleOpen(2)} className='text-base text-white dark:hover:text-cyan-600 hover:text-yellow-300' nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              <span className='text-white dark:hover:text-cyan-600 hover:text-yellow-300'>Software Engineer @Pointwest Technologies Corp</span><span className='float-right'>2015-2018</span>
            </AccordionHeader>
            <AccordionBody className='border-b'>
              <div className='w-full'>
                <span className='text-white dark:text-cyan-600 px-2'><FontAwesomeIcon icon={faLocationDot} /></span>
                <span className='text-white dark:text-cyan-600 pr-8'>Quezon City, PH</span>
                <a className='group' href="https://pointwest.com.ph" target="_blank" rel='noopener noreferrer'>
                  <span className='text-white group-hover:text-blue-400 dark:text-cyan-600 px-2'><FontAwesomeIcon icon={faSquareArrowUpRight} /></span>
                  <span className='text-white group-hover:text-blue-400 dark:text-cyan-600 underline'>pointwest.com.ph</span>
                </a>
              </div>
              <div className='w-full mt-4'>
                <span className='text-yellow-300 text-base'>Developed a Customer Service Dashboard Platform for Taiwanese Banking Client.</span>
              </div>
              <div className="w-full mt-4">
                <Chip className='bg-white text-cyan-700' value="Java" /> <Chip className='bg-white text-cyan-700' value="React" /> <Chip className='bg-white text-cyan-700' value="d3Js" />
              </div>
              <div className='w-full mt-4'>
                <span className='text-yellow-300 text-base'>Developed and created APIs and specific features for an Online Shipping Reservation Platform for a local Logistics Client.</span>
              </div>
              <div className="w-full mt-4">
                <Chip className='bg-white text-cyan-700' value="Java" /> <Chip className='bg-white text-cyan-700' value="PusherJs" /> <Chip className='bg-white text-cyan-700' value="VueJs" /> <Chip className='bg-white text-cyan-700' value="AWS EC2" />
              </div>
              <div className='w-full mt-4'>
                <span className='text-yellow-300 text-base'>Pioneered the development of Learning Management System(Mento), an enterprise-grade e-learning platform that the company offers as one of their products</span>
              </div>
              <div className="w-full mt-4">
                <Chip className='bg-white text-cyan-700' value="Java" /> <Chip className='bg-white text-cyan-700' value="Spring MVC" /> <Chip className='bg-white text-cyan-700' value="MySQL" /> <Chip className='bg-white text-cyan-700' value="jQuery" />
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion className='w-full mb-10' animate={customAnimation} nonce={undefined} onResize={undefined} onResizeCapture={undefined} open={false} >
            <AccordionHeader onClick={() => handleOpen(3)} className='text-base text-white dark:hover:text-cyan-600 hover:text-yellow-300' nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              <span className='text-white dark:hover:text-cyan-600 hover:text-yellow-300'>Other works:</span>
            </AccordionHeader>
            <AccordionBody className='border-b'>
              <div className='w-full'>
                <a className='group' href="https://github.com/jasterpepito11/library-mgmt-app" target="_blank" rel='noopener noreferrer'>
                  <span className='text-white group-hover:text-blue-400 dark:text-cyan-600 px-2'><FontAwesomeIcon icon={faGithubAlt} /></span>
                  <span className='text-white group-hover:text-blue-400 dark:text-cyan-600 underline pr-8'>Libra ILS code</span>
                </a>
                <a className='group' href="https://libra-ils.web.app/" target="_blank" rel='noopener noreferrer'>
                  <span className='text-white group-hover:text-blue-400 dark:text-cyan-600 px-2'><FontAwesomeIcon icon={faSquareArrowUpRight} /></span>
                  <span className='text-white group-hover:text-blue-400 dark:text-cyan-600 underline'>libra-ils.web.app</span>
                </a>
              </div>
              <div className='w-full mt-4'>
                <span className='text-yellow-300 text-base'>Libra ILS is a simple Book Management Application I created while experimenting on using the latest React tech-stack deployed using Firebase</span>
              </div>
              <div className="w-full mt-4">
                <Chip className='bg-white text-cyan-700' value="React" /> <Chip className='bg-white text-cyan-700' value="Redux" /> <Chip className='bg-white text-cyan-700' value="RTK Query" /> <Chip className='bg-white text-cyan-700' value="Firebase" />
              </div>
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  )
}
