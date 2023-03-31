import React, {useState} from 'react'
import "./mix.css"
import {NavLink} from "react-router-dom"

const Login = ()=>{
    const [passShow,setpassShow] = useState(false);

    const [inpval,setinpval] = useState({
        email: "",
        password: ""
    });
    const setVal = (e)=>{
        const {name,value} = e.target;
        setinpval(()=>{
            return {
                ...inpval,
                [name]:value
            }
        })
    };

    const checkvalidation = (e)=>{
        e.preventDefault()
        const {email,password} =inpval;
        if(email==""){
            alert("Please enter your email");
        }
        else if(!email.includes("@")){
            alert("Please enter valid email");
        }
        else if(password==""){
            alert("Please enter your password");
        }
        else if(password.length<6){
            alert("Password must be 6 char");
        }
        else{
            console.log("User registration successfully done");
        }
    }

    return (
        <>
            <section>
                <div className='form_data'>
                    <div className='form_heading'>
                        <h1>Welcome back</h1>
                        <p>Please Login</p>
                    </div>
                    <form>
                        <div className='form_input'>
                            <label htmlFor='email'>Email</label>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder="Enter your email here"/>
                        </div>
                        <div className='form_input'>
                            <label htmlFor="password">Password</label>
                            <div className='two'>
                                <input type={!passShow ? "password":"text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter your password here'/>
                                <div className='showpass' onClick={()=>setpassShow(!passShow)}>
                                    {!passShow ? "Show":"Hide"}
                                </div>
                            </div>
                        </div>
                        <button className='btn' onClick={checkvalidation}>Log In</button>
                        <p>Don't have an account? <NavLink to="/register">SignUp</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;