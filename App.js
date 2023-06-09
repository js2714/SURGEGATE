import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Login";
import Register from "./Register";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Home from "./home";
import ViewDetails from "./ViewDetails";
import AddDetails from "./AddDetails";
import EditDetails from "./EditDetails";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/login/register" element={<Register/>} /> 
          <Route path="/" element={<Login/>} />    
          <Route exact path="/main" element={<Home/>} />
        <Route exact path="/add-details" element={<AddDetails/>} />
        <Route exact path="/edit-details/:dserialno" element={<EditDetails/>} />
        <Route exact path="/view-details/:dserialno" element={<ViewDetails/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
