import React from "react";
import { useState } from "react";
import "./styles.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || phone === "" || message === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha todos os campos",
        confirmButtonColor: "#e0b0a0",
      });
      return;
    }
    const templateParams = {
      name: name,
      phone: phone,
      message: message,
    };

    emailjs
      .send(
        "service_dkmhrq8",
        "template_pbnx332",
        templateParams,
        "yH_yRoqU9ykE9CRv1"
      )
      .then(
        (response) => {
          Swal.fire({
            title: "Mensagem enviada com sucesso ",
            icon: "success",
            color: "#828282",
            confirmButtonColor: "#e0b0a0",
          });

          setName("");
          setPhone("");
          setMessage("");
        },
        (err) => {
          console.log("Erro:", err);
        }
      );
  }
  return (
    <div className="form-container" id="contact">
      <h2 className="title-h2">Vamos Conversar? </h2>
      <h6 className="title-h6">Me envie uma mensagem !</h6>

      <form className="form" onSubmit={sendEmail}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(xx) xxxxx-xxxx"
          minLength={9}
          maxLength={14}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          className="message"
          type="text"
          id="message"
          name="message"
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="ENVIAR" />
      </form>
    </div>
  );
}
