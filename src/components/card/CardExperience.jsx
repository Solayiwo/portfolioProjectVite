const CardExperience = (props) => {
  return (
    <div>
      <div>
        <h4 style={{ textAlign: "center" }}>{props.name}</h4>
        <p className="xperiencepostion">{props.position}</p>
      </div>
    </div>
  );
};

export default CardExperience;
