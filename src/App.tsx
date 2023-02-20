import ProfileComponent from './pages/home/profile';
import { ThemeProvider } from './contexts/ThemeProvider';
import HeaderComponent from './pages/header/header';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import SidebarComponent from './pages/sidebar/sidebar';
import ContactComponent from './pages/contact/contact';
import ExperienceComponent from './pages/experience/experience';
import AboutComponent from './pages/about/about';
function App() {


  return (
  <div className='container-fluid bg-cyan-600  dark:bg-gray-700 min-h-screen box-border overflow-hidden'>
    <BrowserRouter>
    <ThemeProvider>
      <HeaderComponent />
      <div className="main bg-cyan-600 dark:bg-gray-700 font-source w-full">
       <Routes>
        <Route path="/">
          <Route index element={<ProfileComponent />}/>
          <Route path="profile" element={<ProfileComponent />}/>
          <Route path="about" element={<AboutComponent />}/>
          <Route path="experience" element={<ExperienceComponent />}/>
          <Route path="contact" element={<ContactComponent />}/>
        </Route>
        <Route path="*" element={<ProfileComponent />} />
       </Routes>
       <SidebarComponent />
      </div>
      </ThemeProvider>
    </BrowserRouter>
  </div>
  )
}

export default App
