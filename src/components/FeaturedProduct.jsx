import "./FeaturedProduct.css";

function FeaturedProduct() {

  return (
    <div className="wrapper">
      <h1 className="text-4xl mt-9 mb-7">Featured Products</h1>
      <div className="cardsss">

          <div className="cards">
            <div className="image">
              <img src='https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600' alt="" />
            </div>
            <div className="name">
              <h1>Avant-Garde Lamp</h1>
            </div>
            <div className="price">
              <p> $179.22</p>
            </div>
          </div>
          <div className="cards">
            <div className="image">
              <img src='https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
            </div>
            <div className="name">
              <h1>Coffe Table</h1>
            </div>
            <div className="price">
              <p> $219.22</p>
            </div>
          </div>
          <div className="cards">
            <div className="image">
              <img src='https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600' alt="" />
            </div>
            <div className="name">
              <h1>Comfy Bed</h1>
            </div>
            <div className="price">
              <p> $19.22</p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default FeaturedProduct;
