import { Route, Routes } from 'react-router-dom';
import ContactUs from './Components/Pages/ContactUs';
import Home from './Components/Pages/Home';
import Flat from './Components/Pages/Flat';
import House from './Components/Pages/House';
import OfficeSpace from './Components/Pages/OfficeSpace';
import ShutterRoom from './Components/Pages/shutterroom';
import SingleRoom from './Components/Pages/SingleRoom';
import SignIn from './Components/Pages/SignIn';
import Footer from './Components/layouts/Footer';
import Navbar from "./Components/layouts/Navbar";
import PropertySingle from './Components/Pages/PropertySingle';
import AboutUs from './Components/Pages/AboutUs';
import SideBar from './Components/Admin/SideBar';
import AdminHome from './Components/Admin/AdminHome';
import AdminUser from './Components/Admin/AdminUser';
import AdminCategory from './Components/Admin/AdminCategory';
import DashBoard from './Components/Admin/DashBoard';
import Register from './Components/Pages/Register';
import NearMe from './Components/Pages/NearMe';
import Request from './Components/Pages/Request';
import AllProperty from './Components/Pages/AllProperty';
import UserDashBoard from './Components/Pages/UserDashBoard';
import Error from './Components/Pages/Error';
import './App.css'
import { createContext, useState } from 'react';
import EditHome from './Components/Pages/EditHome';

export const AuthContext = createContext();

function App() {
const [authUser, setAuthUser] = useState({});

  if(authUser.email == "admin@gmail.com"){
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
      </div>
      )
  }

  else {
  return (
    <>
    <AuthContext.Provider value={authUser}>
      <Navbar setAuthUser={setAuthUser}/>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/contactUs" element={<ContactUs/>}> </Route>
        <Route path="/flat" element={<Flat />}> </Route>
        <Route path="/singleRoom" element={<SingleRoom />}> </Route>
        <Route path="/house" element={<House />}> </Route>
        <Route path="/shutterRoom" element={<ShutterRoom />}> </Route>
        <Route  path="/officeSpace" element={<OfficeSpace/>}></Route>     
        <Route  path="/property" element={<AllProperty/>}></Route>
        <Route path="/property/:id"  element={<PropertySingle/>}></Route>   
        <Route path="/aboutUs" element={<AboutUs/>}></Route> 
        <Route path="/nearMe" element={<NearMe/>}></Route> 
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/signIn" element={<SignIn setAuthUser={setAuthUser}/>}></Route>  
        <Route path="/request" element={<Request/>}></Route>   
        <Route path='/dashboard' element={<UserDashBoard />}></Route>
        <Route path='/dashboard/home/:id' element={<EditHome />}></Route>
        <Route element={<Error />}> </Route>
      </Routes>
      <Footer />
      </AuthContext.Provider>
      </>
  );
  }
}

export default App;