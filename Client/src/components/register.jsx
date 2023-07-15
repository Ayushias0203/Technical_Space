import React,{useState} from 'react'
import "./mix.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink,useNavigate} from 'react-router-dom'

const Register = (()=>{
    const [passShow,setpassShow] = useState(false);
    const [cpassShow,setcpassShow] = useState(false);

    const [inpval,setinpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });
    // console.log(inpval);
    const history = useNavigate();
    const setVal = (e)=>{
        // console.log(e.target.value);
        const {name,value} = e.target;
        setinpval(()=>{
            return {
                ...inpval,
                [name]:value
            }
        })
    };

    const checkvaidation = async(e)=>{
        e.preventDefault()
        const {fname,email,password,cpassword} = inpval;
        if(fname==""){
            toast.warning("Please enter your name", {
                position: "top-center"
            });
        }
        else if(email==""){
            toast.error("Please enter your email", {
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
        else if(cpassword==""){
            toast.error("Please confirm password", {
                position: "top-center"
            });
        }
        else if(password!==cpassword){
            toast.error("Confirm Password and password not match", {
                position: "top-center"
            });
        }
        else{
            // console.log("User registration successfully done");

            const data = await fetch("https://technical-space-w69w.vercel.app/register",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    fname,email,password,cpassword
                })
            });
            const res = await data.json();
            console.log(res.status);

            if(res.status===201){
                toast.success("Registration Successfully done 😃!", {
                    position: "top-center"
                });
                setinpval({...inpval,fname:"",email:"",password:"",cpassword:""});
            }
        }
    } 
 
    return(
        <>
            <section>
                <div className='form_data'>
                    <div className='form_heading'>
                        <h3>Immerse yourself in your very own Journey to technical Space</h3>
                        {/* <p>I'm glad you are gonna use it</p> */}
                    </div>
                    <form>
                        <div className='form_input'>
                            <label htmlFor="fname">Name</label>
                            <input type="text" onChange={setVal} value={inpval.fname} id="fname" name="fname" placeholder="Enter your name here" />
                        </div>
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
                        <div className='form_input'>
                            <label htmlFor="password">Confirm Password</label>
                            <div className='two'>
                                <input type={!cpassShow ? "password":"text"} onChange={setVal} value={inpval.cpassword} name="cpassword" id="cpassword" placeholder='Confirm password'/>
                                <div className='showpass' onClick={()=>setcpassShow(!cpassShow)}>
                                    {!cpassShow ? "Show":"Hide"}
                                </div>
                            </div>
                        </div>
                        <button className='btn' onClick={checkvaidation}>Sign Up</button>
                        <p>Already have an account? <NavLink to="/">LogIn</NavLink></p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
})

export default Register;