import React from "react";
import "./Hero.css";
import { image } from "../../constants/images";

function Hero() {
  return (
    <section className="hero">
  
      <div className="pre-title">
        <p>
          Plan, Save, Strive with <span>SafiCircles</span>
        </p>
      </div>

      <h1 className="hero-title">
        Turn Contributions <br />
        Into An Empowerment
      </h1>

      <button className="hero-btn">
        Join Your Circle <span>→</span>
      </button>


      <div className="hero-cards">
      
        <div className="card left-card">
          <h3>Your Circle Savings</h3>
          <p>okkk</p>
          <h1>1,200,000 Rwf</h1>
          <p>Total Saved</p>
          <div className="sub-div">
            <div className="color"></div>
            <div>
                <h5>Ungrrrrrrr</h5>
                <h4>ookkkkkk</h4>
            </div>
          </div>
        </div>

        <div className="card middle-card">
          <span className="badge">Digital IKIBINA System</span>
          <h3>
            Tracking <span>100+</span> Contributions In Real Time
          </h3>
          <div>
            <div className="circle"></div>
            <p>Current contributions show this group is ready for a fixed asset investment</p>
          </div>
          <img
            src={image.hands}
            alt="community"
          />
        </div>

        <div className="card dark">
          <span className="badge">Best Saving Plan</span>
          <h3>
            From Struggle to <br /> Start Up in seconds
          </h3>
          <button className="secondary-btn">Show me how</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
