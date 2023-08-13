
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import Header from '../Header/header';
import { Grid } from '@mui/material';
import ActionCard from './Card';

const profiles = [
    { id: 1, username: "Aman Raj", image:"https://media.licdn.com/dms/image/C4D03AQETTh0qOjEm_Q/profile-displayphoto-shrink_400_400/0/1646562060286?e=1693440000&v=beta&t=a0oDnJOPaL14Iro3hdWik-kWNwNIZiCxJel3LUK4Xvk",desc: "Hi, I'm Aman -a Production Engineer Undergraduate at Motilal Nehru National Institute of Technology, Allahabad I'm intrested towards Software Development and working with cutting edge techs. I’m currently learning MERN stack 📫 You can reach out to me via email at amanraj7166@gmail.com." },
    { id: 2, username: "Ayushi Shukla", image: "https://media.licdn.com/dms/image/D4D03AQGk6pR38Nwg0g/profile-displayphoto-shrink_400_400/0/1686303308515?e=1693440000&v=beta&t=deTkWmRNYPBDcKOi_YG5BrlzMUp8FVg6l_u0mmaKBgQ",desc: " I'm a Civil Engineering Undergraduate at Motilal Nehru National Institute of Technology, Allahabad (MNNIT).💡 Interested in working alongside like minded people enthusiastic about Software Development or developing cutting edge tech.🌱 I'm on track for enhancing my knowledge about Data Structures and Algorithms. 📫 You can reach out to me via email at shukla.c.ayushi@gmail.com."}
];

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));
const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
          <Header/>
          {console.log(profiles[0])}
   
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy! 
                <Link href="mailto:shukla.c.ayushi@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Typography>    
                
     
     
   
            </Wrapper>
            <Grid container spacing={5} columns={16}>
  <Grid item xs={6}>
  <ActionCard profile = {profiles[0]}/>
  </Grid>
  <Grid item xs={6}>
    <ActionCard profile = {profiles[1]}/>
  </Grid>
</Grid>
        </Box>
    );
}

export default Contact;
