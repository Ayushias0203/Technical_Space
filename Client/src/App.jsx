import Header from "./components/header";
import Login from "./components/login";
import {Routes,Route} from "react-router-dom";
import Register from "./components/register";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
