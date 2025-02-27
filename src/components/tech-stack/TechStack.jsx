import { useState } from "react";
import html from "../../assets/images/icons8-html.svg";
import css from "../../assets/images/icons8-css.svg";
import bootstrap from "../../assets/images/icons8-bootstrap.svg";
import tailwindcss from "../../assets/images/icons8-tailwindcss.svg";
import javascript from "../../assets/images/icons8-javascript.svg";
import react from "../../assets/images/icons8-react.svg";
import nextjs from "../../assets/images/icons8-nextjs.svg";

import mysql from "../../assets/images/icons8-mysql.svg";
import django from "../../assets/images/icons8-django.svg";
import python from "../../assets/images/icons8-python.svg";
import nodejs from "../../assets/images/icons8-nodejs.svg";
import postgres from "../../assets/images/icons8-postgres.svg";

import git from "../../assets/images/icons8-git.svg";
import github from "../../assets/images/icons8-github.svg";
import google from "../../assets/images/icons8-google.svg";
import slack from "../../assets/images/icons8-slack.svg";
import discord from "../../assets/images/icons8-discord.svg";
import trello from "../../assets/images/icons8-trello.svg";
import vscode from "../../assets/images/icons8-visual-studio-code-2019.svg";
import chatgpt from "../../assets/images/icons8-chatgpt.svg";

const TechStack = () => {
  const [stacklist, setStacklist] = useState(
    <div className="stack-grid">
      <div className="grid">
        {/* HTML */}
        <img src={html} alt="html" />
      </div>
      <div className="grid">
        <img src={css} alt="css" />
      </div>
      <div className="grid">
        <img src={bootstrap} alt="bootstrap" />
      </div>
      <div className="grid">
        <img src={tailwindcss} alt="tailwindcss" />
      </div>
      <div className="grid">
        <img src={javascript} alt="javascript" />
      </div>
      <div className="grid">
        <img src={react} alt="react" />
      </div>
      <div className="grid">
        <img src={nextjs} alt="nextjs" />
      </div>
    </div>
  );

  const frontendHandler = () => {
    setStacklist(
      <div className="stack-grid">
        <div className="grid">
          <img src={html} alt="html" />
        </div>
        <div className="grid">
          <img src={css} alt="css" />
        </div>
        <div className="grid">
          <img src={bootstrap} alt="bootstrap" />
        </div>
        <div className="grid">
          <img src={tailwindcss} alt="tailwindcss" />
        </div>
        <div className="grid">
          <img src={javascript} alt="javascript" />
        </div>
        <div className="grid">
          <img src={react} alt="react" />
        </div>
        <div className="grid">
          <img src={nextjs} alt="nextjs" />
        </div>
      </div>
    );
  };

  const backendHandler = () => {
    setStacklist(
      <div className="stack-grid">
        <div className="grid">
          <img src={mysql} alt="mysql" />
        </div>
        <div className="grid">
          <img src={django} alt="django" width={38} height={38} />
        </div>
        <div className="grid">
          <img src={python} alt="python" width={38} height={38} />
        </div>
        <div className="grid">
          <img src={nodejs} alt="nodejs" width={38} height={38} />
        </div>
        <div className="grid">
          <img src={postgres} alt="postgres" />
        </div>
      </div>
    );
  };

  const othersHandler = () => {
    setStacklist(
      <div className="stack-grid">
        <div className="grid">
          <img src={git} alt="git" />
        </div>
        <div className="grid">
          <img src={github} alt="github" />
        </div>
        <div className="grid">
          <img src={google} alt="google" />
        </div>
        <div className="grid">
          <img src={slack} alt="slack" />
        </div>

        <div className="grid">
          <img src={discord} alt="discord" />
        </div>

        <div className="grid">
          <img src={trello} alt="trello" />
        </div>

        <div className="grid">
          <img src={vscode} alt="vscode" />
        </div>

        <div className="grid">
          <img src={chatgpt} alt="chatgpt" />
        </div>
      </div>
    );
  };

  return (
    <div className="wrapper2">
      <div className="stack">
        <h2>Tech Stack and Tools</h2>
        <div className="stack-head">
          <button className="buttonstack" onClick={frontendHandler}>
            Frontend
          </button>
          <button className="buttonstack" onClick={backendHandler}>
            Backend
          </button>
          <button className="buttonstack" onClick={othersHandler}>
            Others
          </button>
          {/* <Button3 stack="Frontend" frontendHandler={frontendHandler} /> */}
          {/* <Button3 stack="Backend" backendHandler={backendHandler} /> */}
          {/* <Button3 stack="Others" /> */}
        </div>

        {/* <div className="stack-grid">
          <div className="grid">HTML</div>
          <div className="grid">CSS</div>
          <div className="grid">Javascript</div>
          <div className="grid">React</div>
          <div className="grid">Nextjs</div>
        </div> */}
        <div>{stacklist}</div>
      </div>
    </div>
  );
};

export default TechStack;
