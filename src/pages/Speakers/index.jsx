import "./index.css";
import FirstFotter from "../../components/firstFotter";
import Cart from "../../components/cart";
import spaeaker1 from "../../assets/speakers1.png";
import spaeaker2 from "../../assets/speakers2.png";
import { Link } from "react-router-dom";
function speakers() {
  return (
    <>
      <div className="headphones_header">
        <h2>SPEAKERS</h2>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="img">
          <img src={spaeaker1} alt="" />
        </div>
        <div className="descriptions w-[425px]">
          <p className="text-orange-600 mb-9 line ">NEW PRODUCT</p>
          <h2 className="text-5xl mb-9">ZX9 SPEAKER</h2>
          <p className="mb-9">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link
            to="/speakers1"
            className="btn w-36 bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]"
          >
            See Product
          </Link>
        </div>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="descriptions w-[445px]">
          <h2 className="text-5xl mb-4">ZX7 SPEAKER</h2>
          <p className="mb-4">Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
          <Link
            to="/speakers2"
            className="btn w-36 bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]"
          >
            See Product
          </Link>
        </div>
        <div className="img">
          <img src={spaeaker2} alt="" />
        </div>
      </div>

      <Cart></Cart>
      <FirstFotter></FirstFotter>
    </>
  );
}

export default speakers;
