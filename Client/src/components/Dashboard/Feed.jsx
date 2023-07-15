import React,{useEffect, useState} from 'react'
import FeedHeader from './feedHeader'
import './Feed.css'
import Post from './Post';
import Widget from './Widget';
import axios from "axios";


function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(()=>{
  //  axios.get("https://technical-space-w69w.vercel.app/validuser")
  //  .then((res) => {
  //   console.log(res.data);
  // })
  // .catch((e) => {
  //   console.log(e);
  // });
  // })

  useEffect(() => {
    axios
      .get("https://technical-space-w69w.vercel.app/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
   <>
   <div className='feed'>
    <FeedHeader/>
   
    {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    {/* <Post/> */}
 
    </div>
    
   </>
  )
}

export default Feed;