import CardExperience from "../card/CardExperience";

const WorkExperience = () => {
  return (
    <div className="project-container">
      <div>
        <div className="project-title">
          <h2>Experiences</h2>
        </div>
        <div className="project-grid">
          <div className="project-card">
            <CardExperience
              name="Petrong Software Solutions"
              position="Frontend Developer (Internship)"
            />
          </div>

          <div className="project-card">
            <CardExperience
              name="Brainy Codes Global Technology Limited"
              position="Software Engineering Intern (SIWES)"
            />
          </div>

          <div className="project-card">
            <CardExperience
              name="HoneyTreat Trade Academy"
              position="Software Engineering Trainee"
            />
          </div>
          <div className="project-card">
            <CardExperience name="Continent Alarm" position="CCTV Operator" />
          </div>

          <div className="project-card">
            <CardExperience
              name="Adepower and Proton Energy"
              position="Technical Intern"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
