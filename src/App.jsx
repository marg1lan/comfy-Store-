import './App.css'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from './pages/Login/Login'
import "./App.css";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Checkout from "./components/chekout";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Speakers1 from "./pages/Speakers1";
import Speakers2 from "./pages/Speakers2";
import Earphones1 from "./pages/Earphones1";
import Headphones1 from "./pages/Headphones1";
import Headphones2 from "./pages/Headphones2";
import Headphones3 from "./pages/Headphones3";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0.65 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/"
            element={
                <Layout>
                  <Home></Home>
                </Layout>
            }
          ></Route>
          <Route
            path="/headphones"
            element={
                <Layout>
                  <Headphones></Headphones>
                </Layout>
            }
          />
           <Route
            path="/headphones1"
            element={
                <Layout>
                  <Headphones1></Headphones1>
                </Layout>
            }
          />
          <Route
            path="/headphones2"
            element={
                <Layout>
                  <Headphones2></Headphones2>
                </Layout>
            }
          />
            <Route
            path="/headphones3"
            element={
                <Layout>
                  <Headphones3></Headphones3>
                </Layout>
            }
          />
          <Route
            path="/speakers"
            element={
                <Layout>
                  <Speakers></Speakers>
                </Layout>
            }
          />
          <Route
            path="/speakers1"
            element={
                <Layout>
                  <Speakers1></Speakers1>
                </Layout>
            }
          />
          <Route
            path="/speakers2"
            element={
                <Layout>
                  <Speakers2></Speakers2>
                </Layout>
            }
          />

          <Route
            path="/earphones"
            element={
                <Layout>
                  <Earphones></Earphones>
                </Layout>
            }
          />
           <Route
            path="/earphones1"
            element={
                <Layout>
                  <Earphones1></Earphones1>
                </Layout>
            }
          />
          <Route
            path="/checkout"
            element={
                <Layout>
                  <Checkout></Checkout>
                </Layout>
            }
          />
          <></>
          <Route path="*" element={<Error></Error>} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
