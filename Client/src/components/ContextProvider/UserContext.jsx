import { useState, createContext } from "react";


export const UserContext = createContext()
const [logindata,setLoginData] = useState("");


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
   // setLoginData(data);
    history("/dash");
    setLoginData(data.ValidUserOne);
    console.log(data.ValidUserOne.fname);
    console.log(logindata);
  }
}

useEffect(() => {
  setTimeout(()=>{
    DashboardValid();
  },2000)

}, [])

const Context = ({children}) => {

 

return (
  <>
  <LoginContext.Provider value={{logindata,setLoginData}}>
      {children}
  </LoginContext.Provider>
  </>
)
}

export default Context