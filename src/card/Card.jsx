import React from "react";
import "./Card.css";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="main">
      <div className="card-div">
        <img
          src="https://cdn.hihello.me/v/23d9bd22-d702-40c8-9dfe-423efa913a82.jpg-large-preserve-ratio"
          alt="user-profile"
          className="profile"
        />
        {/* <svg class="overlay" viewBox="0 0 500 200">
  <path d="M 0,100 C 150,0 350,200 500,100 L 500,200 L 0,200" ></path>
</svg> */}
        
        <div className="icondiv">
            <img src="https://cdn.hihello.me/v/c924d21f-ec76-4bfe-951f-af9159ac91ad.jpg-large-preserve-ratio" alt="icon"
            className="icon" />
        </div>

        <div className="profile-details">
          <h1>Nirmal C S</h1>
          <h2>Executive Key Accounts</h2>
          <h2>Marketing</h2>
          <h2>StoreKing</h2>
        </div>

        <h2 className="media">Social Media Marketer</h2>

        <div className="contact-details">
          <div className="email-box">
            <div className="mobile-icon"><MdEmail style={{height:"30px",width:"30px",color:"white"}}/></div>
            <div className="text-style">
              <h3>nirmal.c@storeking.in</h3>
              <h4>work</h4>
            </div>
          </div>
          <div className="mobile-box">
            <div className="mobile-icon"><BsTelephoneFill style={{height:"30px",width:"30px",color:"white"}}/></div>
            <div className="text-style">
              <h3>+91 7012301588</h3>
              <h4>work</h4>
            </div>
          </div>
        </div>
      </div>
      <button className="savebtn">SAVE CONTACT</button>
    </div>
  );
};

export default Card;
