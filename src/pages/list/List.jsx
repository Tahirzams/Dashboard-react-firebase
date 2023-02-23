import './list.scss';
import TableComp from '../../components/table/TableComp';
import { NavLink } from 'react-router-dom';

const List = () => {
  return (
    <div>
      <div className='add__product'>
      <NavLink className="add" to="/product/new">Add New Product</NavLink>
      </div>
      <TableComp/> 
      
    </div>
  )
}

export default List