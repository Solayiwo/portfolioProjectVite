import { Button2 } from "../button/Button";
import ola from "../../assets/images/sulaimon.png";

const AboutMe = () => {
  return (
    <div className="wrapper">
      <div>
        <h1 className="abt-head">About Me</h1>
        <div className="hero">
          <div className="about-image">
            <img src={ola} alt="hello" width={300} className="deskscrin" />
            <img src={ola} alt="hello" width={200} className="mobscrin" />
          </div>

          <div className="about-content">
            <h2>Olayiwola Sulaimon</h2>
            <h4>Software Engineer</h4>

            <p>
              I am an enthusiastic and dedicated software engineer, I&#39;m
              passionate about creating seamless user experiences and optimizing
              performance in web applications with a strong focus on fullstack
              development, using technologies like HTML, CSS, Tailwind CSS,
              Bootstrap, JavaScript, React, and Next.js. Let’s connect and
              collaborate!
            </p>

            <div className="button-cv">
              <Button2 resume="Resume" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
