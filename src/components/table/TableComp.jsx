import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'
import { collection, getDocs,doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../config/Authconfig';
import { VolunteerActivismOutlined } from '@mui/icons-material';
import { async } from '@firebase/util';



// const rows = [
//   {
//     id: 1143155,
//     product: "Acer Nitro 5",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     customer: "John Smith",
//     date: "1 March",
//     amount: 785,
//     method: "Cash on Delivery",
//     status: "Approved",
//   },
//   {
//     id: 2235235,
//     product: "Playstation 5",
//     img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
//     customer: "Michael Doe",
//     date: "1 March",
//     amount: 900,
//     method: "Online Payment",
//     status: "Pending",
//   },
//   {
//     id: 2342353,
//     product: "Redragon S101",
//     img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
//     customer: "John Smith",
//     date: "1 March",
//     amount: 35,
//     method: "Cash on Delivery",
//     status: "Pending",
//   },
//   {
//     id: 2357741,
//     product: "Razer Blade 15",
//     img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
//     customer: "Jane Smith",
//     date: "1 March",
//     amount: 920,
//     method: "Online",
//     status: "Approved",
//   },
//   {
//     id: 2342355,
//     product: "ASUS ROG Strix",
//     img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
//     customer: "Harold Carol",
//     date: "1 March",
//     amount: 2000,
//     method: "Online",
//     status: "Pending",
//   },
// ];
const TableComp = () => {

  let [rows , setrows ] = useState([]);
  let list = []
useEffect(()=>{
 let fetchdata = async ()=>{
 let res = await getDocs(collection(db , "products"))
   res.forEach((doc)=>{
    list.push({id:doc.id, ...doc.data() })
   })
  setrows(list)
 }
 fetchdata()
},[]);
console.log(rows)

let DeleteProduct = async (id)=>{
let deldoc = await deleteDoc(doc(db , "products" , id));
let temprow = await rows.filter((row)=>{
  return row.id !== id 
})
  await setrows(temprow)

}

  return (
    <TableContainer component={Paper} className='tableCont'>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell' >Tracking Id</TableCell>
            <TableCell className='tableCell'>Image</TableCell>
            <TableCell className='tableCell'>Product Name</TableCell>
            <TableCell className='tableCell' >Description</TableCell>
            <TableCell className='tableCell' >Category</TableCell>
            <TableCell className='tableCell' >Amount</TableCell>
            <TableCell className='tableCell' >Stock</TableCell>
            <TableCell className='tableCell' >Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}  >
              <TableCell className='tableCell'>
                {row.id}
              </TableCell>
              <TableCell className='tableCell img'>
                <img className='customerImg' src={row.img} alt="" />
                </TableCell>
              <TableCell className='tableCell'>{row.title}</TableCell>
              <TableCell className='tableCell'>{row.description}</TableCell>
              <TableCell className='tableCell'>{row.category}</TableCell>
              <TableCell className='tableCell'>{row.price}</TableCell>
              <TableCell>
                <div className={row.stock? "stock inStock" : " stock outofStock"}>{row.stock? "In Stock" : "Out of Stock"}</div>
              </TableCell>
              <TableCell className='tableCell'>
                <div className='table__action'>

               <div className="table__view">View</div>
               <div className="table__delete" onClick={()=> DeleteProduct(row.id)}>Delete</div>
                </div>
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComp