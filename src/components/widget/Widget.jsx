import './widget.scss'
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SavingsIcon from '@mui/icons-material/Savings';
import { useEffect, useState } from 'react';
import { query, collection,getDocs , where } from 'firebase/firestore';
import { db } from '../../config/Authconfig';
import { logDOM } from '@testing-library/react';
let Widget = ({type}) => {

useEffect(()=>{
    let getdata =  async()=>{
        let data = await getDocs(collection(db , "products"))
        let user = await getDocs(collection(db , "users"))
    }
    getdata()
},[])


    let [count, setcount] = useState('')
    let [diff , setdiff] = useState("")
    let data ;

    switch(type){
        case "users" :
            data={
                title: "users",
                isbalnce: false,
                name: "users",
                desc: "see all users",
                icon: <PersonIcon className='users__icon'/>
            };
            break
            case "products" :
                data={
                    title: "Products",
                    isbalnce: false,
                    name: "products",
                    desc: "see all orders",
                    icon: <ShoppingCartIcon className='orders__icon'/>
                };
                break
            case "earnings" :
                data={
                    title: "earnings",
                    isbalnce: true,
                    desc: "view net earnings",
                    name: 200,
                    icon : <MonetizationOnIcon className='earnings__icon'/>
                };
                break;
            case "balance" :
                data={
                    title: "balance",
                    isbalnce: true,
                    desc: "see details",
                    icon : (<SavingsIcon className='balance__icon'/>),
                };
                 break;

    }
    useEffect(()=>{
        const fetchdata = async () => {
            let today = new Date();
            let lastmonth = new Date(new Date().setMonth(today.getMonth()-1));
            let prvmonth = new Date(new Date().setMonth(today.getMonth()-2));
         
            const lastmonthQuery = query(
                collection(db , data.name),
                where("timeStamp", "<=", today),
                where("timeStamp" , ">" , lastmonth)
            );
                const prvmonthQuery = query(
                collection(db, data.name),
                where("timeStamp", "<=", lastmonth),
                where("timeStamp", ">", prvmonth)
            );
        
            console.log(data.query)
          let lastmonthData = await getDocs(lastmonthQuery);
          let prvmonthData = await getDocs(prvmonthQuery)

          let diffrence = ((lastmonthData.docs.length - prvmonthData.docs.length) / prvmonthData.docs.length * 100)
          setcount(lastmonthData.docs.length);

         setdiff(diffrence.toFixed(2) || diffrence || "")
      
    
        
        };
        fetchdata();
    },[])

    return (
        <div className="single__widget">
            <div className="widget__left">
                <p className='widget__title'>{data?.title}</p>
                <p className='widget__count'>{!data?.isbalnce? count : `${count}$` }</p>
                <p className='widget__desc'>{data?.desc}</p>
            </div>
            <div className="widget__right">
                <p className={diff < 0? "red widget__percentage" : "green widget__percentage" }>  {diff < 0? <KeyboardArrowDownIcon /> :<KeyboardArrowUpIcon />}{diff}% </p>
                <p className='widget__icon'>{data?.icon}</p>
            </div>
        </div>

    )
}

export default Widget