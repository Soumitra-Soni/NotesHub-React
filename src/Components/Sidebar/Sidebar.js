import React from "react";
import myImage from "./pictures/myself-pic.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { AiFillMail } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={myImage} alt="nothing here" className="sidebar-image" />
      <button className="link">
        <a
          href="https://github.com/Soumitra-Soni"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <AiOutlineGithub size="2em" />
        </a>
      </button>
      <button className="link">
        <a
          href="https://github.com/Soumitra-Soni"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <SiLeetcode size="2em" />
        </a>
      </button>
      <button className="link">
        <a
          href="https://github.com/Soumitra-Soni"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {" "}
          <AiFillMail size="2em" />
        </a>
      </button>
    </div>
  );
};

export default Sidebar;
