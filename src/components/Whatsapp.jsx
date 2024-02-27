import React from 'react';
import whatsapplogo from "../assets/whatsapp/whatsapp.png";

const Whatsapp = () => {
  return (
    <div className='fixed-bottom right-100 p-3' style={{ zIndex: "6", left: "initial" }}>
      <a href="https://wa.me/919472302900?text=Hello How can I help you?" target="_blank">
        <img src={whatsapplogo} width="60" alt="" />
      </a>
    </div>
  );
};

export default Whatsapp;
