import React from 'react'
import "./header.css"
import Avatar from '@mui/material/Avatar';

const Header = ()=>{
    return (
        <>
            <header>
                <nav>
                    <h1>Hello Techie</h1>
                    <Avatar src="/broken-image.jpg" />
                </nav>
            </header>
        </>
    )
}

export default Header;