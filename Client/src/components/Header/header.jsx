import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  // Close,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
} from "@mui/icons-material/";
import './header.css'
// import CloseIcon from "@mui/icons-material/Close";
 import {  Button, Input } from "@mui/material";

function Header() {
  return (
    <div className="qHeader">
    <div className="qHeader-content">
      <div className="qHeader__logo">
        <img
          src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
          alt="logo"
        />
      </div>
      <div className="qHeader__icons">
        <div className="qHeader__icon">
          <HomeIcon />
        </div>
        <div className="qHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlined />
        </div>
        <div className="qHeader__icon">
          <PeopleAltOutlined />
        </div>
        <div className="qHeader__icon">
          <NotificationsOutlined />
        </div>
      </div>
      <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
         
            <Avatar/>
         
          </div>
          
          <Button>Add Question</Button>
   
    </div>
  </div>
  )
}

export default Header