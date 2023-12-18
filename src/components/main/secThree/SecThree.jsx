import React, { useEffect, useState } from "react";
import axios from "axios";

function SecThree() {
  const [owl, setowl] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.taffeine.com/api/home/product_composition")
      .then((resp) => {
        let data = resp.data.data;
        setowl(data);
      });
  }, []);
  return (
    <div className="secThree">
      <h1>{owl.title}</h1>
      <div className="father">
        <div className="one">
          <table
            border={2}
            dangerouslySetInnerHTML={{ __html: owl.content }}
          ></table>
        </div>
        <div className="two">
          <img src={owl.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SecThree;
