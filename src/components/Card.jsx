import React, { useState } from "react";
import "./Card.css";
import img from "../images/image-product-1.jpg";

import kich1 from "../images/kich4.jpg";
import kich2 from "../images/kich.jpg";
import kich3 from "../images/kich3.jpg";
import kich4 from "../images/kich2.jpg";

function Card() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    document.getElementById("my_modal_1").showModal();
  };  

  return (
    <div className="conntent">
      <div className="content">
        <div className="image">
          <img
            className="rounded-xl"
            width={374}
            height={254}
            src={img}
            alt="krosofka"
          />
        </div>
        <div className="text">
          <h2 className="haj2 font-bold">Sneaker Company</h2>
          <h3 className="haj3 font-bold">
            Fall Limited Edition <br /> Sneakers
          </h3>
          <h3 className="haj4">
            These low-profile sneakers are your perfect casual wear <br />
            companion.
          </h3>
          <div className="price">
            <p className="font-bold">$125.00</p>
            <button className="btn">50%</button>
          </div>
          <h5 className="chiziq">$250.00</h5>
          <div className="btns">
            <button className="btn mt-9 bg-orange-600 hover:text-slate-950 w-60">
              <i className="fa-solid fa-cart-shopping"></i>{" "}
              <span>Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
      <div className="images">
        <button onClick={() => openModal(kich1)}>
          <img width={88} height={88} src={kich1} alt="" />
        </button>
        <button onClick={() => openModal(kich2)}>
          <img width={88} height={88} src={kich2} alt="" />
        </button>
        <button onClick={() => openModal(kich3)}>
          <img width={88} height={88} src={kich3} alt="" />
        </button>
        <button onClick={() => openModal(kich4)}>
          <img width={88} height={88} src={kich4} alt="" />
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="modall flex gap-7 align-content mt-7">
              {selectedImage && (
                <img className="w-full h-full" src={selectedImage} alt="" />
              )}
            </div>
            <div></div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Card;
