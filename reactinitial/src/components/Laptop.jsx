import React, { useState } from "react";

function Laptop(props) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={handleClick}>{show ? "Show less" : "Show more"}</button>
      {show && (
        <div>
          <p>Brand:{props.brand}</p> <p>Weight:{props.weigth}</p>
        </div>
      )}
    </div>
  );
}

export default Laptop;
