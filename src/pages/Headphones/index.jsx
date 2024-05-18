import "./index.css";
import FirstFotter from "../../components/firstFotter";
import Cart from "../../components/cart";
import { useEffect, useState } from "react";
import headphones1 from "../../assets/headphones1.png";
import headphones2 from "../../assets/headphones2.png";
import headphones3 from "../../assets/headphones3.png";
import { Link } from "react-router-dom";
function Headphones() {
  return (
    <>
      <div className="headphones_header">
        <h2>HEADPHONES</h2>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="img">
          <img src={headphones1} alt="" />
        </div>
        <div className="descriptions w-[445px]">
          <p className="text-orange-600 mb-9 line ">NEW PRODUCT</p>
          <h2 className="text-5xl mb-4">XX99 Mark IIHeadphones</h2>
          <p className="mb-7">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link
            to="/headphones1"
            className="btn w-36 bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]"
          >
            See Product
          </Link>
        </div>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="descriptions w-[445px]">
          <h2 className="text-5xl mb-9">XX99 Mark IHeadphones</h2>
          <p className="mb-9">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <Link
            to="/headphones2"
            className="btn w-36 bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]"
          >
            See Product
          </Link>
        </div>
        <div className="img">
          <img src={headphones2} alt="" />
        </div>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px] mb-8">
        <div className="img">
          <img src={headphones3} alt="" />
        </div>
        <div className="descriptions w-[445px]">
          <h2 className="text-5xl mb-9">XX59 Headphones</h2>
          <p className="mb-9">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Link
            to="/headphones3"
            className="btn w-36 bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]"
          >
            See Product
          </Link>
        </div>
      </div>
      <Cart></Cart>
      <FirstFotter></FirstFotter>
    </>
  );
}

export default Headphones;
