import React from "react";
import "./Home.css";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <div className="home">
      <div className="section-1-left">
        <div className="section-1-text">
          <h>Hello! I'm Niraj Nepal</h>
          <h1 className="title">Software Engineer</h1>
          <p>
            I am a recent graduate with a major in Computer Science<br />
            and minors in Cyber Security and Mathematics. I am an
            <br />Enthusiastic individual ready for what's ahead!
          </p>
          {/* Add the Button component here */}
        <p>
          <Button />
          </p>
        </div>
      </div>
      <div className="section-1-right">
        <div className="rounded-image">
          <img
            src="https://scontent.fagc3-1.fna.fbcdn.net/v/t39.30808-6/349061242_154854020900804_2183159603774144043_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=V-3N3IuoPuEAX8Lw5WY&_nc_ht=scontent.fagc3-1.fna&oh=00_AfBxcNihhHyZpKgVkgF2QMG3ssaSID5y0mgtOP30HdJdGA&oe=64EB3D1F"
            alt="Niraj"
          />
        </div>
      </div>

      <div className="section-2">{/* Add your content for section 2 */}</div>
    </div>
  );
}

export default Home;
