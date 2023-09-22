import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Ranking from "./pages/Ranking";
import Aram from "./pages/Aram";
import Analyze from "./pages/Analyze";
import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Nav from "./pages/Nav";


const App = () => {
  return (
    <div>
      {/* 상단 네비게이션바 불러오기 */}
      <Nav />
      {/* 서치 불러오기 */}
      <Search />
      
      {/* 경로 설정 */}
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/aram" element={<Aram />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      
    </Routes>
    </div>
  );
};

export default App;
