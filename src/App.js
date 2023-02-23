import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import SinglePage from './pages/singlePage/SinglePage';
import NewPage from './pages/newPage/NewPage';
import {  Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar'
import './app.scss'
import Navbar from './components/navbar/Navbar';
import { useCustomhook } from './context/ContextProvider';
import Users from './pages/users/Users';
import Userdata from './components/Userdata';
import ProductData from './components/ProductData';
import './components/style/dark.scss';

const App = () => {
   let {darkCol, setdarkCol, islogin, setislogin} = useCustomhook()
 
  const ReqAuth = ({children})=>{
  return islogin? children : <Navigate to='/login' />
  }

  return (
      <div className={darkCol? "app__main dark" : "app__main"}>
      <Sidebar/>
      <div className='routes'>
      <Navbar/>
      <Routes>
        <Route path='/'> 
        <Route path='/login' element={<Login/>} />
        <Route index 
        element={<ReqAuth><Home/></ReqAuth>} />

        <Route path='user'>
          <Route index element={<ReqAuth><Users /></ReqAuth> } />
          <Route path=':userId' element={ <ReqAuth><SinglePage/></ReqAuth>} />
          <Route path='new' element={ <ReqAuth><NewPage data={Userdata} title="Add New User" type="user"/></ReqAuth>} />
        </Route>
        <Route path='product'>
          <Route index element={<ReqAuth><List /></ReqAuth>} />
          <Route path=':productId' element={<ReqAuth><SinglePage/></ReqAuth>} />
          <Route path='new' element={<ReqAuth><NewPage data={ProductData} title="Add New Product" type="product"/> </ReqAuth>} />
        </Route>

        </Route>
      </Routes>
    </div>
      </div>
  )
}

export default App