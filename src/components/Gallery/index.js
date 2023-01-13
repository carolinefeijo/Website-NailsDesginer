import React from "react";
import "./styles.css";

import nail1 from "../../assets/img/Gallery/nail1.jpg";
import nail2 from "../../assets/img/Gallery/nail2.jpg";
import nail3 from "../../assets/img/Gallery/nail3.jpg";
import nail4 from "../../assets/img/Gallery/nail4.jpg";
import nail5 from "../../assets/img/Gallery/nail5.jpg";
import nail6 from "../../assets/img/Gallery/nail6.jpg";

export const Gallery = () => {
  return (
    <div className="gallery-component-container">
      <div className="container-primary-imgs">
        <img className="img-small" alt="unha" src={nail1} />
        <img className="img-medium" alt="unha" src={nail2} />
        <img className="img-small" alt="unha" src={nail3} />
      </div>

      <div className="container-secundary-imgs">
        <img className="img-big" alt="unha" src={nail4} />

        <div className="container-tertiary-imgs">
          <img className="img-tertiary-medium" alt="unha" src={nail5} />
          <img className="img-tertiary-big" alt="unha" src={nail6} />
        </div>
      </div>
    </div>
  );
};
