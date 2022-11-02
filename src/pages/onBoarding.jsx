import React from "react";
import { Link } from "react-router-dom";

// Onboarding Picture
import onBoarding from "../assets/onboarding-2.gif";

const OnBoarding = () => {
  return (
    <div className="onboarding-screen-container">
      <>
        <img className="onboarding-image" src={onBoarding} alt="onboarding" />
        <h4 className="onboarding-title">Let's Take a Tour </h4>
        <br />
        <p className="onboarding-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis
          magni velit consectetur quam esse est cum praesentium dignissimos a
          sed, aliquid error nesciunt. Earum nemo sapiente, labore aliquam
          dignissimos facere dicta modi? Nesciunt ipsum dolorem magni harum
          molestiae officiis!
        </p>
        <br />
        <Link to="profile">
          <button className="onboarding-button">Get Started</button>
        </Link>
      </>
    </div>
  );
};

export default OnBoarding;
