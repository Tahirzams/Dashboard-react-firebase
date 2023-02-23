import './home.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Widget from '../../components/widget/Widget';
import Chart from '../../components/chart/Chart';
import TableComp from '../../components/table/TableComp';
const home = () => {
  return (
    <div className='home__main'>
     
 <div className="widget__main">
      <Widget type="users"/>
      <Widget type="products"/>
      <Widget type="earnings"/>
      <Widget type="balance" />
      </div>

      <div className="homeSection">
        <div className="homeSection__left">
          <div style={{ width: 150 }}>
            <CircularProgressbar value={66} text='70%' strokeWidth={4} />
          </div>
          <div className="homeSection__left__content">
            <h2 className='content__sales'>Total sales made today</h2>
            <h1 className='content__count'>$420</h1>
            <p className='content__p'>
              Preevious transactions processing Last payments may not be included
            </p>
          </div>
        </div>
        <div className="homeSection__right">
       <Chart height={350} title="Profit"/>
        </div>
      </div>
      <TableComp/>


    </div>
  )
}

export default home