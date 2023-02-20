import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GITHUB_LINK, INSTA_LINK, LINKEDIN_LINK } from '../../constants';
import './index.scss';
export default function SidebarComponent() {
  return (
    <div className='sidebar'>
      <div className='container'>
        <div className='flex w-100 mb-3'>
          <a className='group inline-grid grid-cols-6 h-[48px]' href={INSTA_LINK} target="_blank" rel='noopener noreferrer'>
            <span className='col-span-1 h-[48px] order-last col-end-7 hover:text-cyan-200 cursor-pointer '>
              <FontAwesomeIcon className='h-[48px] text-white group-hover:text-yellow-300' icon={faInstagram} />
            </span>
            <span className='col-span-5 mt-[2px] mb-[6px] pl-[6px] pt-[6px] order-first underline rounded text-gray-700 white hidden group-hover:inline-block group-hover:bg-yellow-300 hover:text-blue-500 ease-in duration-400'>@theonlyseventh</span>
          </a>
        </div>
        <div className='flex w-100 mb-3'>
          <a className='group inline-grid grid-cols-6' href={GITHUB_LINK} target="_blank" rel='noopener noreferrer'>
            <span className='col-span-1 order-last col-end-7 hover:text-cyan-200 cursor-pointer'>
              <FontAwesomeIcon className='h-[48px] text-white group-hover:text-yellow-300' icon={faGithub} />
            </span>
            <span className='col-span-5 mt-[2px] mb-[6px] pl-[6px] pt-[6px] order-first underline rounded text-gray-700 hidden group-hover:block group-hover:bg-yellow-300 hover:text-blue-500 ease-in duration-400'>@jasterpepito11</span>
          </a>
        </div>
        <div className='flex w-100 mb-3'>
          <a className='group inline-grid grid-cols-6' href={LINKEDIN_LINK} target="_blank" rel='noopener noreferrer'>
            <span className='col-span-1 order-last col-end-7 hover:text-cyan-200 cursor-pointer'>
              <FontAwesomeIcon className='h-[48px] text-white group-hover:text-yellow-300' icon={faLinkedin} />
            </span>
            <span className='col-span-5 mt-[2px] mb-[6px] pl-[6px] pt-[6px] order-first underline rounded text-gray-700 hidden group-hover:block group-hover:bg-yellow-300 hover:text-blue-500 ease-in duration-400'>@joshua-pepito</span>
          </a>
        </div>
      </div>
    </div>
  )
}
