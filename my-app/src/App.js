import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searchbar from "./pages/Searchbar";
import Aram from "./pages/Aram";
import Classic from "./pages/Classic";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Nav from "./pages/Nav";
import Search from "./pages/Search";
import Anal2 from "./pages/anal/Anal2";
import Anal from "./pages/anal/Anal";
import AnalSearch from "./pages/anal/AnalSearch";
import Anal2Search from "./pages/anal/Anal2Search";
import TestTest from "./pages/TestTest";

const App = () => {
  return (
    <div>
      {/* 상단 네비게이션바 불러오기 */}
      <Nav />
      {/* 검색기 불러오기 */}
      <Searchbar />
      {/* 경로 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/aram" element={<Aram />} />
        <Route path="/anal2" element={<Anal2 />} />
        <Route path="/anal" element={<Anal />} />
        <Route path="/anal/analsearch" element={<AnalSearch />} />
        <Route path="/anal2/anal2search" element={<Anal2Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/testtest" element={<TestTest />} />
      </Routes>
    </div>
  );
};

export default App;
