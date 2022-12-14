import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PostDetail from "./components/PostDetail/PostDetail";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
