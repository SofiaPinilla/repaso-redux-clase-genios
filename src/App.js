import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PostDetail from "./components/PostDetail/PostDetail";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import AdminZone from "./guards/AdminZone";
import PrivateZone from "./guards/PrivateZone";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateZone>
                <Profile />
              </PrivateZone>
            }
          />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search />} />
          <Route
            path="/admin"
            element={
              <AdminZone>
                <Admin />
              </AdminZone>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
