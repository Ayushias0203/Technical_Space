import Header from "./components/header";
import Login from "./components/login";
import {Routes,Route, useNavigate} from "react-router-dom";
import Register from "./components/register";
import Dashboard from "./components/Dashboard/dashboard";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";
import DetailView from "./components/Blog/BlogDetails";
import CreatePost from "./create/CreatePost";


function App() {
  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);

  const history = useNavigate();

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
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data);
      history("/dash");
      console.log(data.ValidUserOne.fname);
      console.log(logindata);
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])

  return (
    <>
    {
        data ? (
          <>
         
          <Header />
            
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/blog" element={<Blog/>} />
              <Route path='/create'  element={<CreatePost />} />
              <Route path='blog/details/:id' element={<DetailView />} />
              <Route path="*" element={<Error />} />
            </Routes>
            
          </>
          

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }
    </>
  );
}

export default App;
