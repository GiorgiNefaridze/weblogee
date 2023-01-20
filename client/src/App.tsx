import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Blogs from "./components/Blogs/Blogs";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import { GlobalStyles } from "./App.style";

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
