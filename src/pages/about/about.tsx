import { faAngular, faAws, faGitAlt, faGitlabSquare, faJava, faJsSquare, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import AnimatedLettersComponent from '../../components/AnimatedLettersComponent';
import './index.scss';

export default function AboutComponent() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
  }, [])
  return (
    <div className='grid grid-cols-6 h-full pt-8 pl-8 pr-8'>
      <div className="col-span-3 text-yellow-300 text-sm">
        <div className="flex w-full h-18 mt-8">
          <AnimatedLettersComponent
            classWrapper='text-white text-4xl'
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </div>
        <div className="flex w-full mt-8 text-base">
          <p>Hello there!</p>
        </div>
        <div className="flex w-full mt-4">
          <p>I'm Joshua, a Full-stack Developer with 6+ years of commercial experience based in Batangas,Philippines.
            I specialize in creating end-to-end web applications that are fast, easy to use and built with best practices
            using Java and Spring Boot and JavaScript frameworks such as Angular and React.</p>
        </div>
        <div className="flex w-full mt-4">
          <p>As a wearer of many hats,my experience includes CI/CD development&#40;GitLab, AWS&#41;, API Management&#40;Google APIGEE&#41;
            while being exposed to an Agile environment.
            I am a continuous learner,that I prefer to keep learning, continue to challange myself
            by building and experimenting on my personal projects using the latest technology stacks available.
          </p>
        </div>
        <div className="flex w-full mt-4">
          <p>Outside of work, I am your typical guy who enjoys travelling different places and at the same time
            be content with just staying at home, playing video games and enjoying pineapple on pizza.
          </p>
        </div>
      </div>
        <div className="col-span-3">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#1FBED6" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color="#FF9900" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitlabSquare} color="#fca326" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
