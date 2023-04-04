// import Header from "./components/header";
import Login from "./components/login";
import {Routes,Route} from "react-router-dom";
import Register from "./components/register";
import Dashboard from "./components/Dashboard/dashboard";

function App() {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
