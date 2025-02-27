import "@fortawesome/fontawesome-free/css/all.min.css";

const SocialIcon = () => {
  return (
    <div>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=shinar930@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>

      <a
        href="https://github.com/Solayiwo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/olayiwola-sulaimon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://x.com/shinar930"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-x-twitter"></i>
      </a>
    </div>
  );
};

export default SocialIcon;
