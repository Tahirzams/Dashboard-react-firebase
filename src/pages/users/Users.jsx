import React, { useEffect, useState } from 'react';
import './users.scss';
import { DataGrid } from '@mui/x-data-grid';
import { NavLink } from 'react-router-dom';
import { logDOM } from '@testing-library/react';
import {collection , getDocs,  doc, deleteDoc,onSnapshot  } from 'firebase/firestore'
import { db } from '../../config/Authconfig';


const columns = [
    { field: 'id', headerName: 'User', width: 100 ,
    renderCell: (pharms)=>{ 
      return (
        <div className='image__row' >
          <img className='img' src={pharms.row.img} alt="avatar" />
          <p className='id'>{pharms.row.id}</p>
        </div>
      )
    } },
    { field: 'Name', headerName: 'Full-Name', width: 130 },
    { field: 'Email', headerName: 'Email', width: 130 },
    {field: 'Phone',headerName: 'Phone', width: 80,
    },
    {
      field: 'Adress',
      headerName: 'Adress',
      sortable: false,
      width: 200,
    },
  ];
  
  const Users = () => {  
  let [rowsdata, setrowsdata] = useState([]);


  let handlefilter = async (id)=>{
    await deleteDoc(doc(db, "users", id));
    let newrow=  rowsdata.filter((item) =>{
   return     item.id != id } )
      setrowsdata(newrow)
  } 

  useEffect(()=>{
  //  const fetchData = async ()=>{
  //   let list = [];
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   querySnapshot.forEach((doc)=>{
  //   list.push({id: doc.id, ...doc.data()})
  //   })
  //   setrowsdata(list)


  //  }
  //  fetchData()

  // LISTEN
  const unsub = onSnapshot(collection(db, "users"), (snapchat) => {
    let list = []
    snapchat.docs.forEach((doc)=>{
      list.push({id:doc.id , ...doc.data()})
    })
    setrowsdata(list)
});
return ()=> {  unsub()  }


  },[])

  let actionColumn = [{field:"action", headerName:"action", width:200,
renderCell:(pharms)=>{
  return(
    <div className='action__cell'>
      <NavLink to="/user/test" className='view__btn'>View</NavLink>
      <NavLink className='delete__btn'
        onClick={()=>{
       handlefilter(pharms.row.id)
       }}
      >Delete</NavLink>
    </div>
  )
}}]
    return (
      <div className="user__main">
     <div className='add__user'>
          <NavLink to="/user/new" className="add">Add User</NavLink>
     </div>
    

        <div className='user__table' style={{ height: 400, }}>
          <DataGrid
            rows={rowsdata}
            columns={columns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
      );
}

export default Users