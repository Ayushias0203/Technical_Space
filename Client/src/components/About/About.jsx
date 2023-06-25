
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import Header from '../Header/header';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
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

const About = () => {

    return (
        <Box>
         <Header/>
            <Banner/>
            <Wrapper>
                <Typography variant="h3" >Technical Space</Typography>
                <Text variant="h5" > A sapce for geeks all around world
                    <Box component="span" style={{ marginLeft: 35 }}>
                        <Link href="https://github.com/amandev02" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    <Box component="span" style={{ marginLeft: 2 }}>
                        <Link href="https://www.instagram.com/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:amanraj7166@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;