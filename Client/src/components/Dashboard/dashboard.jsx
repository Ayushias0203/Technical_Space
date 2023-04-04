import React from 'react'
import Header from '../Header/header'
import "./dashboard.css";
import Sidebar from "./Sidebar";
import Widget from './Widget';
import Feed from './Feed';


function Dashboard() {
  return (
    <>
    <div className="techie">
      <Header />
      <div className="techie__contents">
        <div className="techie__content">
        <Sidebar />
         <Feed/>
         <Widget/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard