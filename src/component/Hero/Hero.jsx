import React, { useState } from "react";
import "./hero.css";
import Input from "../reusables/Input";
import Button from "../reusables/Button";

const Hero = () => {
  const [email, setEmail] = useState();
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div id="hero">
      <div className="hero-container">
        <div className="hero-details">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>

          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="input-div">
          <Input
            type={"text"}
            onChange={onChange}
            name={"form"}
            value={email}
            placeholder={"email.com"}
          />
          <Button
            width={150}
            height={50}
            color={"white"}
            bg={"red"}
            border={5}
            text={"Get Started"}
            br={"none"}
            ml={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
