import React from "react";
import "./ContactCard.css";

const ContactCard = ({ data }) => {
  const handlebuttonclick = (url, name) => {
    console.log(url);
    const email = url;
    if (name === "Email") {
      const mailtoLink = `mailto:${email}`;
      window.location.href = mailtoLink;
    } else if (name === "Whatsapp") {
      const phoneNumber = url;
      const whatsappLink = `https://wa.me/${phoneNumber}`;
      window.open(whatsappLink, "_blank");
    } else if (name === "Linkedin") {
      const linkedinProfileUrl = url;
      window.open(linkedinProfileUrl, "_blank");
    } else {
      console.log("error while retrieving the data");
    }
  };
  return (
    <>
      {data.data.map((item) => (
        <>
          <div className="card-container">
            <div className="logo">
              <img src={item.icon} />
            </div>
            <div className="name">{item.name}</div>
            <div className="value">{item.value}</div>
            <button
              className="sendbutton"
              onClick={() => handlebuttonclick(item.send, item.name)}
            >
              {item.button}
              <span className="right-arrow"> &#8594;</span>
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default ContactCard;
