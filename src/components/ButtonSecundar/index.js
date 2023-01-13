import React from "react";
import "./styles.css";

export default function ButtonSecundar({ size, margin }) {
  return (
    <div margin-top={margin} className="container-button-secundar">
      <a href="/contact">
        <button width={size} className="container">
          CONTATO
        </button>
      </a>
    </div>
  );
}
