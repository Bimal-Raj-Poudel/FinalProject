import { Route, Routes } from 'react-router-dom';
import ContactUs from './Components/Pages/ContactUs';
import Home from './Components/Pages/Home';
import Flat from './Components/Pages/Flat';
import House from './Components/Pages/House';
import OfficeSpace from './Components/Pages/OfficeSpace';
import ShutterRoom from './Components/Pages/shutterroom';
import SingleRoom from './Components/Pages/SingleRoom';
import Register from './Components/Pages/Register';
import SignIn from './Components/Pages/SignIn';
import Footer from './Components/layouts/Footer';
// import SignUp from './Components/Pages/SignUp';
import Navbar from "./Components/layouts/Navbar"
import PropertyPage from "./Components/Pages/PropertyPage"
import PropertySingle from './Components/Pages/PropertySingle';
import AboutUs from './Components/Pages/AboutUs';
import SideBar from './Components/Admin/SideBar';
import AdminHome from './Components/Admin/AdminHome';
import AdminUser from './Components/Admin/AdminUser';
import AdminCategory from './Components/Admin/AdminCategory';
import DashBoard from './Components/Admin/DashBoard';
import './App.css'

function App() {

  const isAdmin = true;

  if(isAdmin){
    return( 
    <div className='Flex-Container'>

        <div className='sidebar'>  <SideBar /> </div>

        <div className='content'> 
          <Routes> 
          <Route path="/" element={<DashBoard/>}></Route> 
          <Route path="/admin/home" element={<AdminHome/>}></Route> 
          <Route path="/admin/user" element={<AdminUser/>}></Route> 
          <Route path="/admin/category" element={<AdminCategory/>}></Route> 
          </Routes>
          </div>
    
      </div>)
  }

  else {
  return (
    <>    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/contactUs" element={<ContactUs/>}> </Route>
        <Route path="/Flat" element={<Flat />}> </Route>
        <Route path="/Singleroom" element={<SingleRoom />}> </Route>
        <Route path="/House" element={<House />}> </Route>
        <Route path="/ShutterRoom" element={<ShutterRoom />}> </Route>
        <Route  path="/Officespace" element={<OfficeSpace/>}></Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>        
        <Route path="/property" element={<PropertyPage/>}></Route>        
        <Route path="/propertySingle" element={<PropertySingle/>}></Route>        
        <Route path="/aboutUs" element={<AboutUs/>}></Route>  
      </Routes>
      <Footer />
    </>
  );
  }
}

export default App;