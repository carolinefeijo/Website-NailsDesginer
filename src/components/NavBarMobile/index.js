import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-scroll";

import logo from "../../assets/img/logoo.jpg";
import menu from "../../assets/icons/menu.jpg";

import ButtonSecundar from "../ButtonSecundar";

export const NavBarMobile = () => {
  const [isActiveButton, setIsActiveButton] = useState(false);

  return (
    <nav className="navbarMobile">
      <Link to="/">
        <img className="logo" src={logo} alt="Liziane Silva" />
      </Link>

      <ul className={!isActiveButton ? "menuDisable" : "menu"}>
        <li>
          <button
            className="buttonSeletor"
            onClick={() => {
              setIsActiveButton(isActiveButton ? false : true);
            }}
          >
            <img className="iconButton" src={menu} alt="icone" />
          </button>

          <ul>
            <li>
              <a href="/">HOME</a>
            </li>

            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                SERVIÇOS
              </Link>
            </li>

            <li>
              <Link
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                QUEM SOU
              </Link>
            </li>

            <li>
              <Link
                to="localization"
                spy={true}
                smooth={true}
                offset={300}
                duration={500}
              >
                LOCALIZAÇÃO
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                {" "}
                <ButtonSecundar size={"10px"} />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
