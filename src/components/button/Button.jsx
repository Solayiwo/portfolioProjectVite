import { Link } from "react-router-dom";
import ola_cv from "../../assets/file/sulaimon-olayiwola_cv.pdf";

export const Button = (props) => {
  return (
    <div>
      <Link to="/about" className="button">
        {props.about}
      </Link>
    </div>
  );
};

export const Button2 = (props) => {
  return (
    <div>
      <a href={ola_cv} className="button" target="_blank">
        {props.resume}
      </a>
    </div>
  );
};

export const Button3 = (props) => {
  return (
    <div>
      <button className="button">{props.stack}</button>
    </div>
  );
};

// export default Button;
