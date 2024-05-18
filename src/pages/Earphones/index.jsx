import "./index.css";
import FirstFotter from "../../components/firstFotter";
import Cart from "../../components/cart";
import erarphones from "../../assets/earphones2.png";
import { Link } from "react-router-dom";

function Earphones() {
  return (
    <>
      <div className="headphones_header">
        <h2>EARPHONES</h2>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="img">
          <img src={erarphones} alt="" />
        </div>
        <div className="descriptions w-[445px]">
          <p className="text-orange-600 mb-9 line ">NEW PRODUCT</p>
          <h2 className="text-5xl mb-9">YX1 WIRELESS EARPHONES</h2>
          <p className="mb-9">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <Link
            to="/earphones1"
            className="btn w-32 bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]"
          >
            ADD TO CART
          </Link>
        </div>
      </div>

      <Cart></Cart>
      <FirstFotter></FirstFotter>
    </>
  );
}

export default Earphones;
