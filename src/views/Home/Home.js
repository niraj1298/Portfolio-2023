import React from "react";
import { useEffect } from "react";
import "./Home.css";
import Button from "../../components/Button/Button";

const NIRAJ_PROFILE =
  "https://scontent.fagc2-1.fna.fbcdn.net/v/t39.30808-6/349061242_154854020900804_2183159603774144043_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7aDa_FaKJbgAX96YLWq&_nc_ht=scontent.fagc2-1.fna&oh=00_AfCng11d7ZeaC89yQUVcaprnbyvP1YFgJS9nDlrrmW4-lw&oe=64F12BDF";

function Home() {
  useEffect(() => {
    const contElements = document.querySelectorAll(".cont");

    contElements.forEach((cont) => {
      const progressBar = cont.querySelector(".progress-bar");
      const span = cont.querySelector("span");

      const width = cont.getAttribute("data-percent");

      progressBar.style.transition = "width 6s ease-in-out";
      progressBar.style.width = width;

      span.style.transition = "left 6s ease-in-out";
      span.style.left = width;
    });
  }, []);
  return (
    <div className="home">
      <div className="section-wrapper">
        <div className="section-1-left">
          <div className="section-1-text">
            <h>Hello! I'm Niraj Nepal</h>
            <h1 className="title">Software Engineer</h1>
            <p>
              I am a recent graduate with a major in Computer Science
              <br />
              and minors in Cyber Security and Mathematics. I am an
              <br />
              Enthusiastic individual ready for what's ahead!
            </p>
            <p>
              <Button />
            </p>
          </div>
        </div>
        <div className="section-1-right">
          <div className="rounded-image">
            <img src={NIRAJ_PROFILE} alt="Niraj Nepal" />
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="top-section">
          <h1>About Me</h1>
        </div>
        <div className="bottom-section">
          <section class="skills">
            <h3>Skills</h3>
            <div class="cont" data-percent="75%">
              <p>C++</p>
              <div class="progress blue">
                <div class="progress-bar">
                  <span>75%</span>
                </div>
              </div>
            </div>

            <div class="cont" data-percent="60%">
              <p>JAVA</p>
              <div class="progress green">
                <div class="progress-bar">
                  <span>60%</span>
                </div>
              </div>
            </div>

            <div class="cont" data-percent="90%">
              <p>HTML/CSS</p>
              <div class="progress blue">
                <div class="progress-bar">
                  <span>90%</span>
                </div>
              </div>
            </div>

            <div class="cont" data-percent="65%">
              <p>JAVASCRIPT</p>
              <div class="progress carrot">
                <div class="progress-bar">
                  <span>65%</span>
                </div>
              </div>
            </div>

            <div class="cont" data-percent="35%">
              <p>REACT</p>
              <div class="progress sun">
                <div class="progress-bar">
                  <span>35%</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
