import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Bid from './Pages/Bid'
function App() {
  return (
   <>
    <Router>
      <Routes>
        {/* <Route exact path="/" element ={<Login />}></Route> */}
        {/* <Route path="/Signup" element={<Signup />}></Route> */}
        <Route path="/" element={<Bid />}></Route>
      </Routes>
    </Router>
   </>
  );
}
export default App;
