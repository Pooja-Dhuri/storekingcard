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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="wave1"
            viewBox="0 0 1440 320"
          >
            <path
              className="overlay"
              fill="#c5261b"
              fill-opacity="1"
              d="M0,256L80,256C160,256,320,256,480,229.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="wave2"
            viewBox="0 0 1440 320"
          >
            <path
              className="overlay"
              fill="white"
              fill-opacity="1"
              d="M0,256L80,256C160,256,320,256,480,229.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>

        <div className="icondiv">
          <img
            src="https://cdn.hihello.me/v/c924d21f-ec76-4bfe-951f-af9159ac91ad.jpg-large-preserve-ratio"
            alt="icon"
            className="icon"
          />
          
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
            <div className="mobile-icon">
              <MdEmail
                style={{ height: "30px", width: "30px", color: "white" }}
              />
            </div>
            <div className="text-style">
              <h3>nirmal.c@storeking.in</h3>
              <h4>work</h4>
            </div>
          </div>
          <div className="mobile-box">
            <div className="mobile-icon">
              <BsTelephoneFill
                style={{ height: "30px", width: "30px", color: "white" }}
              />
            </div>
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
