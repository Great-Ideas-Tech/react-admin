import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import Dashboard from './Pages/Dashboard'
import Avatar from './Pages/Avatar'
import Basictable from './Pages/Basictable'
import Buttons from './Pages/Buttons'
import Datatable from './Pages/Datatable'
import Fontawesome from './Pages/Fontawesome'
import Forms from './Pages/Forms'
import Googlemap from './Pages/Googlemap'
import Jsvectormap from './Pages/Jsvectormap'
import Notification from './Pages/Notification'
import Panel from './Pages/Panel'
import Sidebar2 from './Pages/Sidebar2'
import Simplelineicon from './Pages/Simplelineicon'
import Sweetalert from './Pages/Sweetalert'
import Typography from './Pages/Typography'
import Widget from './Pages/Widget'
import Gridsystem from './Pages/Gridsystem'
import Chart from './Pages/Chart'
import Sparkline from './Pages/Sparkline'
import Mobilesidebar from './Components/MobileSide';
import MessageDropdown from './Components/Responsive/Messages';
import Notifications from './Components/Responsive/Notifications';
import QuickActions from './Components/Responsive/QuickActions';
import User from './Components/Responsive/User';
import SettingsPopup from './Components/SettingPopup';
import NotFound from './Components/NotFound';



const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <>
      <BrowserRouter>
      <div class="wrapper ml-0">

      <Sidebar/>
      <div class="main-panel">
      <Header toggleSidebar={toggleSidebar}/>
      <Mobilesidebar  isOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <div className='min-h-screen md:mt-20 mt-4'> 
        <SettingsPopup/>       
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/avatar' element={<Avatar/>}/>
          <Route path='/basic' element={<Basictable/>}/>
          <Route path='/button' element={<Buttons/>}/>
          <Route path='/data' element={<Datatable/>}/>
          <Route path='/font' element={<Fontawesome/>}/>
          <Route path='/form' element={<Forms/>}/>
          <Route path='/google' element={<Googlemap/>}/>
          <Route path='/vector' element={<Jsvectormap/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path='/panel' element={<Panel/>}/>
          <Route path='/sidebar' element={<Sidebar2/>}/>
          <Route path='/icon' element={<Simplelineicon/>}/>
          <Route path='/sweet' element={<Sweetalert/>}/>
          <Route path='/typo' element={<Typography/>}/>
          <Route path='/widget' element={<Widget/>}/>
          <Route path='/grid' element={<Gridsystem/>}/>
          <Route path='/chart' element={<Chart/>}/>
          <Route path='/spark' element={<Sparkline/>}/>
          <Route path='/mess' element={<MessageDropdown/>}/>
          <Route path='/noti' element={<Notifications/>}/>
          <Route path='/quick' element={<QuickActions/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </div>

        <Footer/>
        </div>
        </div>
      </BrowserRouter>
    </>
    
  )
}

export default App
