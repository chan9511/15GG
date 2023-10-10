import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searchbar from "./pages/search/Searchbar";
import Aram from "./pages/tier/Aram";
import Classic from "./pages/tier/Classic";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import Nav from "./pages/Nav";
import Search from "./pages/search/Search";
import AramBuild from "./pages/anal/AramBuild";
import ClassicBuild from "./pages/anal/ClassicBuild";
import Classic_Search from "./pages/anal/Classic_Search";
import TestTest from "./pages/TestTest";
import Aram_Search from "./pages/anal/Aram_Search";

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
        <Route path="/tier/classic" element={<Classic />} />
        <Route path="/tier/aram" element={<Aram />} />
        <Route path="/arambuild" element={<AramBuild />} />
        <Route path="/classicbuild" element={<ClassicBuild />} />
        <Route path="/anal2/aramsearch" element={<Aram_Search />} />
        <Route path="/anal/classicsearch" element={<Classic_Search />} />
        <Route path="/login/login" element={<Login />} />
        <Route path="/login/signup" element={<SignUp />} />
        <Route path="/search/search" element={<Search />} />
        <Route path="/testtest" element={<TestTest />} />
      </Routes>
    </div>
  );
};

export default App;
