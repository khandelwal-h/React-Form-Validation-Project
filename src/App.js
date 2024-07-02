
import Header from "./Components/Common/Header"; 
import Footer from "./Components/Common/Footer";
import Home from "./Components/Common/Home";
import Userlisting from "./Components/Common/Userlisting";
import Userregistration from "./Components/Common/Userregistration";

import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="leftside">
      <Header/>
      </div>
      <div className="rightside"> 
      <Routes>    
      <Route path="/"element={<Home/>}/>
      <Route path="/userlisting"element={<Userlisting/>}/>
      <Route path="/userregistration"element={<Userregistration/>}/>
      </Routes>
      
      </div>
      
      
    </div>
  );
}

export default App;
