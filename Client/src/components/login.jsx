import React, {useState} from 'react'
import "./mix.css"
import {NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';


const Login = ()=>{
    const [passShow,setpassShow] = useState(false);

    const [inpval,setinpval] = useState({
        email: "",
        password: ""
    });
    const history = useNavigate();
    const setVal = (e)=>{
        const {name,value} = e.target;
        setinpval(()=>{
            return {
                ...inpval,
                [name]:value
            }
        })
    };

    const checkvalidation = async(e)=>{
        e.preventDefault()
        const {email,password} =inpval;
        if(email==""){
            toast.error("email is required!", {
                position: "top-center"
            });
        }
        else if(!email.includes("@")){
            toast.warning("Please enter valid email", {
                position: "top-center"
            });
        }
        else if(password==""){
            toast.error("password is required!", {
                position: "top-center"
            });
        }
        else if(password.length<6){
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        }
        else{
            // console.log("User registration successfully done");
            const data = await fetch("http://localhost:8000/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,password
                })
            });
            const res = await data.json();

            console.log(res);

            if(res.status===201){
                localStorage.setItem("usersdatatoken",res.result.token);
                history("/dash"); 
                setinpval({...inpval,email:"",password:""});
            }
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
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Login;