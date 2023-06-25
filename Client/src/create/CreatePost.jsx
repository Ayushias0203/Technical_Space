import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

// import { API } from '../../service/api';

 import  {LoginContext}  from "../components/ContextProvider/Context";

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();
 
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
     const { logindata, setLoginData } = useContext(LoginContext);
     //const { account } = useContext(LoginContext);

     const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");
    
        const res = await fetch("http://localhost:8000/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
    
        const data = await res.json();
    
        if (data.status == 401 || !data) {
            history("*");
        } else {
            console.log("user verify");
            setLoginData(data)
            console.log(logindata);
            // history("/");
        }
    }

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
        }, 2000)

    }, [])

    useEffect(() => {
        let token = localStorage.getItem("usersdatatoken");
        const config = {
            headers: {
              "Content-Type": "application/json",
              "Authorization": token
            },
          };
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                
                const response = await axios.post("http://localhost:8000/file/upload",data,config);
                post.picture = response.data;
            }
        }
        getImage();
        
        post.categories = location.search?.split('=')[1] || 'All';
         post.username = logindata.ValidUserOne.fname;
    }, [file])
    
 const savePost = async () => {
    let token = localStorage.getItem("usersdatatoken");

    if ( post.title !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
      };
      const body = {
       post
      };
      await axios
        .post("http://localhost:8000/create", body, config)
        .then((res) => {
         
          console.log(res.data.message);
          navigate('/blog');
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding post");
        });
    }
  };



    const handleChange = (e) => {
       
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Image src={url} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
            </StyledFormControl>

            <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)} 
            />
        </Container>
    )
}

export default CreatePost;