import "./contact.css";
import emailjs from "emailjs-com";
import Maps from "../maps/Maps";
//import Footer from "../footer/Footer";
import React from "react";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ohg5q16",
        "template_6esekxe",
        e.target,
        "7IWXok9VQL7lf_Il2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const ShowH3 = (e) => {
    document.getElementById("showH3").style.display = "flex";
  };

  return (
    <React.Fragment>
      <div className="contact" id="contact">
        <div className="leftSide">
          <Maps />
        </div>
        <div className="rightSide">
          <form className="rightForm" onSubmit={sendEmail}>
            <h2 className="h2Tag">Contact-Form.</h2>
            <input
              type="text"
              placeholder="Name"
              name="name"
              min="4"
              max="15"
              required
            />
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              min="6"
              max="25"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              min="10"
              max="200"
              required
            ></textarea>
            <button type="submit" onClick={ShowH3}>
              Send
            </button>
            <h3 id="showH3">Your email has been sent</h3>
          </form>
        </div>
        {/*<Footer/>*/}
      </div>
    </React.Fragment>
  );
}
