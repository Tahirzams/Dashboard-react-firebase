import React from 'react';
import './singlePage.scss';
import profile from '../../avatar.jpg';
import Chart from '../../components/chart/Chart';
import TableComp from '../../components/table/TableComp';
const SinglePage = () => {
  return (
    <div className="single__main">
      <div className="top">
        <div className="top__left">
          <img className='img' src={profile} alt="" />
          <div className="content">
            <div className="name">Jane Doe</div>
            <div className="email">Email: jane@gmail.com</div>
            <div className="phone">Phone: +971561320030</div>
            <div className="adress">Adress: 9th street  tokyo </div>
            <div className="country">Country: Japan</div>
          </div>
        </div>
        <div className="top__right">
          <Chart height={220} title="Expence"/>

        </div>
      </div>
      <div className="bottom">
      <TableComp/>
      </div>

    </div>
  )
}

export default SinglePage;