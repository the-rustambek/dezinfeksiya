import React, { useState } from "react";
import "./Contact.css";
import CImg from "../../assets/Image/contact.png";
import { Fade } from "react-reveal";

function Contact() {

  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");

  let bot = {
    TOKEN: "6196010078:AAFp_QxzIIVposuwGiwr_39zFgS8uQS2MZA",
    chatID: "-1001877467590",
    message: `
      Assalomu alaykum sizga yangi buyurtma xabari!%0A
      %0AIsmi 👤: ${nameValue};
      %0ATelefon raqami ☎: ${numberValue};`,
  };

  function sendZakaz(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
      {
        method: "GET",
      }
    ).then(
      (success) => {
        if (success) {
          console.log("succes");
        }
      },
      (error) => {
        console.log(error);
      }
    );
    setNameValue("");
    setNumberValue("");
  }

  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact_flex">
            <Fade left>
              <div className="contact_left">
                <h2 className="contact_title">Malumotingizni qoldiring</h2>
                <form className="contact_form" onSubmit={(e) => sendZakaz(e)}>
                  <input
                    required
                    value={nameValue}
                    className="contact_input"
                    type="text"
                    placeholder="Ism"
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                  <input
                    required
                    value={numberValue}
                    className="contact_input"
                    type="text"
                    placeholder="+998"
                    onChange={(e) => setNumberValue(e.target.value)}
                  />
                  <button className="contact_send_btn">Yuborish</button>
                </form>
              </div>
            </Fade>
            <div className="contact_right">
              <img className="contact_img" src={CImg} alt="pic" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
