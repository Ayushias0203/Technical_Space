import React,{ useContext } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Header from '../Header/header';
import {LoginContext } from '../ContextProvider/Context';
import { Grid } from '@mui/material';

//components
import Banner from '../Banner/Banner';
 import Categories from './Categories';
import Posts from './post/posts';


export default function Blog() {
    const { logindata, setLoginData } = useContext(LoginContext);
  return (
    <>
    <Header />
    <Banner />
    {/* <h3>{logindata.ValidUserOne? logindata.ValidUserOne.fname: "Techie"}</h3> */}
    <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
            <Categories />
        </Grid>
        <Grid container item xs={12} sm={10} lg={10}>
            <Posts />
        </Grid>
    </Grid>
    </>

    
  )
}

