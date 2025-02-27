import { Button } from "../button/Button";
import solam from "../../assets/images/solam.jpg";

const Hero = () => {
  return (
    <div className="wrapper">
      <div className="hero">
        <div className="hero-content">
          <h1>I&#39;m Olayiwola Sulaimon</h1>
          <h4>I am into Fullstack Software Engineer</h4>

          <div className="hero-mobimage mobscrin">
            <img src={solam} alt="hello" width={300} />
          </div>

          <p>
            I focus on developing user-friendly, high-performance web
            applications that align with client requirements while ensuring
            seamless functionality, scalability, and efficiency. With a strong
            emphasis on clean code, optimized architecture, and modern
            technologies, I&#39;m passionate about create solutions that enhance
            user experience, streamline workflows, and drive business growth.
          </p>

          <div className="button-abt">
            <Button about="About me" />
          </div>
        </div>

        <div className="hero-image deskscrin">
          <img src={solam} alt="hello" width={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
