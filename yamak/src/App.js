import "./App.css";
import Header from "./component/Header";
import React from "react";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketing from "./component/Marketing";
import Social from "./component/Social";
import Sales from "./component/Sales";
import Other from "./component/Other";
import Blogs from "./component/Blogs";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/marketing" element={<Marketing/>}/>
        <Route path="/social" element={<Social/>}/>
        <Route path="/sales" element={<Sales/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/others" element={<Other/>}/>
          
          
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
