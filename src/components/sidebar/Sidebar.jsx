import './sidebar.scss';
import { useNavigate, NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CabinIcon from '@mui/icons-material/Cabin';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DiamondIcon from '@mui/icons-material/Diamond';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import CancelIcon from '@mui/icons-material/Cancel';
import { useCustomhook } from '../../context/ContextProvider';

const Sidebar = () => {
  let navigate = useNavigate()
  let {isSidebarOpen, setisSidebarOpen, setdarkCol, setislogin} = useCustomhook()

  // let navItems = ( nav , icon, title ,)=>{
  //   return(
  //     <div>
  //       <p style={{display:title? 'flex' : 'none' }} className='nav__headings'>{title}</p>
  //       <div className='nav__div'>
  //        <NavLink to={nav=='dashboard'? "/" : nav} className="sidebar__nav">
  //        <div className='icon'>{icon} </div> 
  //         {nav}
  //        </NavLink>
  //       </div>
  //     </div>
  //   )
  // }
  return (
   ( isSidebarOpen && <div className='sidebar__main'>
      <div className="sidebar__top">
       admin board
       <div className='menu__btn' onClick={()=>{
        
        setisSidebarOpen(false)

        }}><CancelIcon className='btn'/></div>
      </div>
      <div className="sidebar__center">
        

     
    
      <p  className='nav__headings'>main</p>
         <NavLink to='/' className="sidebar__nav">
         <div className='icon'><DashboardIcon/> </div> 
        Dashboard
       </NavLink>
         <NavLink to='/user' className="sidebar__nav">
         <div className='icon'><PermIdentityIcon/> </div> 
        users
       </NavLink>
         <NavLink to='/product' className="sidebar__nav">
         <div className='icon'><CabinIcon/> </div> 
        products
       </NavLink>
         <NavLink to='/user/new' className="sidebar__nav">
         <div className='icon'><BusinessCenterIcon/> </div> 
        orders
       </NavLink>
         <NavLink to='/' className="sidebar__nav">
         <div className='icon'><LocalShippingIcon/> </div> 
        delivery
       </NavLink>
       <p  className='nav__headings'>useful</p>
       <NavLink to='/' className="sidebar__nav">
         <div className='icon'><LineAxisIcon/> </div> 
        stats
       </NavLink>
        <NavLink to='/' className="sidebar__nav">
         <div className='icon'><NotificationsIcon/> </div> 
        notification
       </NavLink>
       <p  className='nav__headings'>services</p> 
       <NavLink to='/' className="sidebar__nav">
         <div className='icon'><HealthAndSafetyIcon/> </div> 
        system health
       </NavLink>
        <NavLink to='/' className="sidebar__nav">
         <div className='icon'><DiamondIcon/> </div> 
        logs
       </NavLink> 
       <NavLink to='/' className="sidebar__nav">
         <div className='icon'><SettingsApplicationsIcon/> </div> 
        Setting
       </NavLink>
       <p  className='nav__headings'>user</p>
       <NavLink to='/' className="sidebar__nav">
         <div className='icon'><AccountBoxIcon/> </div> 
        profile
       </NavLink>
       <NavLink to='/' onClick={()=>{
          setislogin(null)
          navigate('/login')
          localStorage.setItem("islogin" , JSON.stringify(false))
          
         }} className="sidebar__nav">
         <div className='icon' ><LogoutIcon/> </div> 
        Logout
       </NavLink>
     

        


      </div>
      <div className="sidebar__bottom">
        <div className="color__option white" onClick={()=>{setdarkCol(false) }}></div>
        <div className="color__option dark" onClick={()=>{setdarkCol(true) }}></div>
        
      </div>
    </div> )
  )
}

export default Sidebar