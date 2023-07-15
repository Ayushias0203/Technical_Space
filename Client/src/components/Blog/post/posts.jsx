import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import axios from "axios";

// import { getAllPosts } from '../../../service/api';
// import { API } from '../../../service/api';

//components
import Post from './post';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    // useEffect(() => {
    //     const fetchData = async () => { 
    //         let response = await fetch('https://technical-space-w69w.vercel.app/posts',{method: 'GET',headers:{ category : category || '' }});
    //         if (response.isSuccess) {
    //             getPosts(response.data);
    //         }
    //     }
    //     fetchData();
    // }, [category]);

    useEffect(() => {
        axios
          .get("https://technical-space-w69w.vercel.app/posts")
          .then((res) => {
            console.log(res.data.reverse());
            getPosts(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }, [category]);

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
    )
}

export default Posts;