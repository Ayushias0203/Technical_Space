import React,{useState} from 'react'
import "./mix.css"
import {NavLink} from 'react-router-dom'

const Register = (()=>{
    const [passShow,setpassShow] = useState(false);
    const [cpassShow,setcpassShow] = useState(false);

    const [inpval,setinpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });
    console.log(inpval);
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

    const checkvaidation = (e)=>{
        e.preventDefault()
        const {fname,email,password,cpassword} = inpval;
        if(fname==""){
            alert("Please enter your name");
        }
        else if(email==""){
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
        else if(cpassword==""){
            alert("Please confirm password");
        }
        else if(password!=cpassword){
            alert("Confirm Password and password not match");
        }
        else{
            console.log("User registration successfully done");
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
                </div>
            </section>
        </>
    )
})

export default Register;