import React from "react";
import "./styles.css";

export const TagsFooter = () => {
  return (
    <div className="details-container">
      <ul>
        <li>
          <a href="/#"> HOME</a>
        </li>

        <li>
          <a href="/services"> SERVIÇOS</a>
        </li>

        <li>
          <a href="/aboutMe"> QUEM SOU </a>
        </li>

        <li>
          <a href="/localization"> LOCALIZAÇÃO</a>
        </li>

        <li>
          <a href="/contact"> CONTATO</a>
        </li>
      </ul>
    </div>
  );
};
