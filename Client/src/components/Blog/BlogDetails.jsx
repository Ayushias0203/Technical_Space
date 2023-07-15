import { useState, useEffect, useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
//import { API } from '../../service/api';
import { LoginContext } from '../ContextProvider/Context'

// components
 import Comments from './comments/comments';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const DetailView = () => {
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    const [post, setPost] = useState({});
    const {logindata, setLoginData} = useContext(LoginContext);
    // const { account } = useContext(LoginContext);

    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        console.log({logindata});
        const fetchData = async () => {
            // let response = await axios.get("https://technical-space-w69w.vercel.app/post/id");
            let response = await fetch('https://technical-space-w69w.vercel.app/post'+'/'+id ,{method: 'GET',headers:{ id : id || '' }});
            
            const data = await response.json();
            console.log(data);
            if (data) {
                setPost(data);
                console.log(post);
            }
        
        }
        fetchData();
    }, [id]);

    const deleteBlog = async () => {  
        let res = await fetch('https://technical-space-w69w.vercel.app/delete'+'/'+id ,{method: 'DELETE'});
        if(res.status === 200){
        history('/')
        }
        else{
            alert("UNABLE TO DELETE")
        }
    }

    return (

        <Container>
            <Image src={post.picture || url} alt="post" />{
            logindata.ValidUserOne&&post?
            <Box style={{ float: 'right' }}>
                {   
                    logindata.ValidUserOne.fname === post.username && 
                    <>  
                        <Link to={`/update/${post._id}`}><EditIcon color="primary" /></Link>
                        <DeleteIcon onClick={() => deleteBlog()} color="error" />
                    </>
                }
            </Box>:''}
           
            <Heading>{post.title}</Heading>

            <Author>
                <Link to={`/?username=${post.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography>Author: <span style={{fontWeight: 600}}>{post.username}</span></Typography>
                </Link>
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>

            <Typography>{post.description}</Typography>
            {/* <Comments post={post} /> */}
        </Container>
    )
}

export default DetailView;