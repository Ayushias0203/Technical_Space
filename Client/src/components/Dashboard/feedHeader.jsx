import React from 'react'
import './FeedHeader.css'
import { Avatar } from '@mui/material'

function FeedHeader () {
  return (
   <>
    <div className="techieBox">
      <div className="techieBox__info">
        <Avatar/>
      </div>
      <div className="techieBox__techie">
        <h5>What is your question or link?</h5>
      </div>
    </div>
   </>
  )
}


export default FeedHeader