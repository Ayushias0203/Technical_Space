import React from 'react'
import FeedHeader from './feedHeader'
import './Feed.css'
import Post from './Post';
import Widget from './Widget';



function Feed() {
  return (
   <>
   <div className='feed'>
    <FeedHeader/>
    <Post/>
    <Post/>
    </div>
    
   </>
  )
}

export default Feed;