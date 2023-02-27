import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Blogs from "./components/Blogs/Blogs";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BlogContent from "./components/BlogContent/BlogContent";

import { UserContext } from "./context/userContext";

import { GlobalStyles } from "./App.style";

const App: FC = () => {
  const { user } = UserContext();

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/create"
          element={user.auth ? <CreateBlog /> : <Blogs />}
        />
        <Route path="/blog" element={<BlogContent />} />
      </Routes>
    </>
  );
};

export default App;
