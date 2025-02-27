import "@fortawesome/fontawesome-free/css/all.min.css";

const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.alt} className="thumbnail" />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <p>{props.technology}</p>
      <a
        href={props.sourceCode}
        className="project_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href={props.urlLink}
        className="project_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-up-right-from-square"></i>
      </a>
    </div>
  );
};

export default Card;
