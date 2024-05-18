import { useEffect, useState } from "react";
import bitmap from "../../assets/bitmap.png";
import "./index.css";
import { NavLink } from "react-router-dom";
import Cart from "../../components/cart";
import zx9b from "../../assets/zxpspeakers.png";
import YX1 from "../../assets/YX1.png";
import FirstFotter from "../../components/firstFotter";
function Home() {

  return (
    <>
      <div className="home pb-[50px]">
        <div className="home_container flex items-center justify-between">
          <div className="home_description">
            <p className="text-base-300 text-xl mb-8">NEW PRODUCT</p>
            <h2 className="text-white text-5xl mb-6">
              XX99 MARK II HEADPHONES
            </h2>
            <p className="text-base-300 mb-8">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <NavLink
              to="/headphones1"
              className="btn w-36 bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]"
            >
              SEE PRODUCT
            </NavLink>
          </div>
          <div className="home_img ">
            <img src={bitmap} alt="" />
          </div>
        </div>
      </div>
      <Cart></Cart>

      <div className="medium">
        <div className="medium_img">
          <img src={zx9b} alt="" />
        </div>
        <div className="medium_title">
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <NavLink to="/speakers1" className="button btn">
            See Product
          </NavLink>
        </div>
      </div>

      <div className="mask">
        <h1>ZX7 SPEAKER</h1>
        <NavLink to="/speakers2" className="button2 btn">
          See Product
        </NavLink>
      </div>

      <div className="earphones">
        <div className="earphones_img">
          <img src={YX1} alt="" />
        </div>
        <div className="earphones_title">
          <h1>YX1 EARPHONES</h1>
          <NavLink to="/earphones1" className="button3 btn">
            See Product
          </NavLink>
        </div>
      </div>

      <FirstFotter></FirstFotter>
    </>
  );
}

export default Home;
