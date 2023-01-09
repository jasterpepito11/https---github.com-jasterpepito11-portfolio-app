import ProfileComponent from './pages/home/profile';
import { ThemeProvider } from './ThemeProvider';
import HeaderComponent from './pages/header';
import { BrowserRouter} from 'react-router-dom';

function App() {


  return (
  <div className='container bg-cyan-600  dark:bg-gray-800 h-full box-border'>
    <BrowserRouter>
    <ThemeProvider>
      <HeaderComponent />
      <div className="main mx-40 relative bg-gradient-to-r from-white">
       <section id="profile-section" className="h-screen mt-[80px]">
          <ProfileComponent />
        </section>
        <section id="about-section" className="justify-center align-middle h-screen mt-[80px] bg-blue-200">
          About me
        </section>
        <section id="experience-section" className="justify-center align-middle h-screen mt-[80px] bg-amber-200">
          Work Experience
        </section>
        <section id="contact-section" className="justify-center align-middle h-screen mt-[80px] bg-lime-200">
          Contact me
        </section>
      </div>
      </ThemeProvider>
    </BrowserRouter>
  </div>
  )
}

export default App
