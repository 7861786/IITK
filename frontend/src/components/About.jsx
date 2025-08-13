import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
const About = () => {
  return (
     <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The Only Thing We're Serious About Is Food.</p>
            </div>
            <p className="mid">
              At Aman’s Kitchen, food isn’t just something we serve — it’s our passion, our art, and our way of bringing people together. 
              Every dish we create is crafted with fresh, high-quality ingredients and a whole lot of love, because we believe that great meals make great memories. 
              From sizzling flavors to comforting classics, we strive to delight your taste buds and warm your heart. 
              For us, every bite tells a story — and we can’t wait for you to be part of ours.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
