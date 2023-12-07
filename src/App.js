import { Route, Routes, useParams } from 'react-router-dom';
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
import './App.css'

function App() {

  const {id} = useParams();

  const isAdmin = false;

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
        <Route path="/signIn" element={<SignIn/>}></Route>  
        <Route path="/request" element={<Request/>}></Route>   
      </Routes>


      <Footer />
     
      </>
  );
  }
}

export default App;