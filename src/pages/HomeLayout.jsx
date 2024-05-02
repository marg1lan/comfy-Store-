import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar , Header } from "../components";

function HomeLayout() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default HomeLayout;
