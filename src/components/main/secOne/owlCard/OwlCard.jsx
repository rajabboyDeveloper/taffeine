import React from "react";
import l from "./OwlCard.module.css";
function OwlCard(props) {
  return (
    <div className={l.owlCard} style={{ backgroundImage: `url(${props.img})` }}>
      <div className="container">
        <h1 className={l.title}>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default OwlCard;
