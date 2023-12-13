import React, { useState, useEffect } from "react";
import l from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
function Navbar() {
  const [val, setval] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/menu").then((resp) => {
      let data = resp.data.data;
      setval(data);
    });
  }, []);

  return (
    <div className="container">
      <div className={l.navbar}>
        <NavLink to="" className={l.logo}>
          <img
            src="https://taffeine.com/_nuxt/img/logo.6335003.svg"
            alt=""
            className={l.logo_img}
          />
        </NavLink>
        <ul className={l.item}>
          {val.map((items, index) => {
            return (
              <li key={index}>
                <NavLink to={items.slug} className={l.item_link}>
                  {items.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button type="button" className={l.btn}>
          Buy online
        </button>
        <button type="button" className={l.btn_two}>
          Russion
        </button>
      </div>
    </div>
  );
}

export default Navbar;
