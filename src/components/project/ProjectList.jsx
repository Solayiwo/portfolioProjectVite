import Card from "../card/Card";
import porfolio from "../../assets/images/portfolio_project.png";
import porfolio2 from "../../assets/images/portfolio_2.png";
import porfolio3 from "../../assets/images/portfolio_3.png";
import porfolio4 from "../../assets/images/portfolio_4.png";
import porfolio5 from "../../assets/images/portfolio_5.png";
import movie from "../../assets/images/movie.png";

const ProjectList = () => {
  return (
    <div className="project-container">
      <div className="project-wrapper">
        <div className="project-title">
          <h2>Projects</h2>
        </div>
        <div className="project-grid">
          <div className="project-card">
            <Card
              name="Projectx"
              image={porfolio2}
              technology="HTML, CSS, Javascript"
              description="Project done during my software engineering training"
              urlLink="https://solayiwo.github.io/hta_projectx/"
              sourceCode="https://github.com/Solayiwo/hta_projectx/"
            />
          </div>

          <div className="project-card">
            <Card
              name="Portfolio Project 1"
              image={porfolio5}
              technology="HTML, CSS, Javascript"
              description="Project done during my software engineering training"
              urlLink=""
              sourceCode=""
            />
          </div>

          <div className="project-card">
            <Card
              name="Portfolio Project (React)"
              image={porfolio}
              technology="React (Vite), CSS, Emailjs"
              description="Project done during my software engineering training"
              urlLink="https://solam-portfolio-project-vite.vercel.app/"
              sourceCode="https://github.com/Solayiwo/portfolioProjectVite"
            />
          </div>

          <div className="project-card">
            <Card
              name="A Portfolio Project (Nextjs)"
              image={porfolio4}
              technology="Nextjs, Tailwindcss"
              description="Project done during my software engineering training"
              urlLink="https://personal-portfolio-olayiwola-sulaimons-projects.vercel.app/"
              sourceCode="https://github.com/Solayiwo/personal-portfolio"
            />
          </div>

          <div className="project-card">
            <Card
              name="A Learning Platform"
              image={porfolio3}
              technology="HTML, CSS, Javascript"
              description="Project done during my software engineering training"
              urlLink="https://solayiwo.github.io/learn_software_tech/"
              sourceCode="https://github.com/Solayiwo/learn_software_tech"
            />
          </div>

          <div className="project-card">
            <Card
              name="Movielookup"
              image={movie}
              technology="React (Vite), Tailwindcss, OMDB API"
              description="A simple movie search website"
              urlLink="https://movielookup.vercel.app/"
              sourceCode="https://github.com/Solayiwo/movielookup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
