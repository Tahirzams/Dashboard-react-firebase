import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import TocIcon from '@mui/icons-material/Toc';
import profile from '../../avatar.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import { useCustomhook } from '../../context/ContextProvider';


const Navbar = () => {
  let {isSidebarOpen , setisSidebarOpen, darkCol, setdarkCol} = useCustomhook()

  return (
    <div className='nav__main'>
      {!isSidebarOpen && <div className="nav__menu__btn" onClick={()=>{
        setisSidebarOpen(true)

      }}>
        <MenuIcon/>
      </div>} 
      <div className="nav__search">
        <input type="text" placeholder='search' />
        <SearchIcon/>
      </div>
      <div className="nav__links">
        <span className='nav__link language'>
        <LanguageIcon/>
        <span>English</span>
        </span>
        <span className='nav__link dark'
        onClick={()=>{ setdarkCol(!darkCol)   }}>
        <BedtimeIcon/>
        </span>
        <span className='nav__link bright'>
          <GpsNotFixedIcon/>
        </span>
        <span className='nav__link  notif nav__notifications'>
          <NotificationsIcon/>
          <span className='notif__count'>2</span>
        </span>
        <span className='nav__link notif nav__message'>
          <EmailIcon/>
          <span className='notif__count'>3</span>
        </span>
        <span className='nav__link nav__toc'>
          <TocIcon/>
        </span>
        <span className='nav__link nav__profile'>
          <img src={profile} alt="profile" />
        </span>

      </div>
      
    </div>
  )
}

export default Navbar