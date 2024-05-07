import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/products",
    text: "products",
  },
  {
    id: 4,
    url: "/cart",
    text: "cart",
  },
  {
    id: 5,
    url: "/chekout",
    text: "chekout",
  },
  {
    id: 6,
    url: "/orders",
    text: "orders",
  },
];

function Navlinks() {
  return (
    <div>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink className="capitalize" to={link.url}>
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </div>
  );
}

export default Navlinks;
