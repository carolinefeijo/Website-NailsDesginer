import React from "react";
import "./styles.css";

import check from "../../assets/icons/check.png";

export default function CardService({ service }) {
  const { details, img, id } = service;

  return (
    <div
      className={
        id % 2 === 0
          ? "card-container-service"
          : "card-container-service-reverse"
      }
      id="services"
    >
      <div className="CardColumn">
        <h2>{service.title}</h2>
        <h6 className="h6-service">{service.subTitle}</h6>

        {details.map((item) => (
          <li key={item}>
            <img className="icon" src={check} alt="check" />
            {item}
          </li>
        ))}
      </div>

      <img className="service-image" src={img} alt="unha aplicação" />
    </div>
  );
}
