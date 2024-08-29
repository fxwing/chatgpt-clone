import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./homepage.css";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("bot");
  return (
    <div className="homepage">
      <img src="/orbital.png" className="orbital"></img>
      <div className="left">
        <h1>LAMA AI</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quis illo cumque veritatis enim ipsum rerum reprehenderit esse ad
          consequatur, officiis sapiente eaque? Tempore non hic quas iure aut
          fuga?
        </h3>
        <Link to="/dashboard">get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "bot" ? "/bot.png" : `/${typingStatus}.jpeg`
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "bot:We produce food for Mice",
                1000,
                () => {
                  setTypingStatus("human1");
                },
                "human1:We produce food for Hamsters",
                1000,
                () => {
                  setTypingStatus("human2");
                },
                "human2:We produce food for Guinea Pigs",
                1000,
                () => {
                  setTypingStatus("bot");
                },
                "bot:We produce food for Chinchillas",
                1000,
              ]}
              wrapper="span"
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" className="logo" />
        <div className="links">
          <Link to="/">Terms of service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
