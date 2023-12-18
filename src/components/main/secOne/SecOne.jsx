import React, { useEffect, useState } from "react";
import axios from "axios";
import l from "./SecOne.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCard from "./owlCard/OwlCard";
function SecOne() {
  const [owl, setowl] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/home/banner").then((resp) => {
      let data = resp.data.data;
      setowl(data);
    });
  }, []);

  return (
    <div className={l.secOne}>
      <OwlCarousel
        className="owl-theme "
        loop
        animateOut={true}
        autoplay={true}
        items={1}
        autoplayTimeout={2000}
      >
        {owl.map((items, index) => {
          return (
            <OwlCard
              key={index}
              title={items.title}
              text={items.short_content}
              img={items.url}
            />
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default SecOne;
