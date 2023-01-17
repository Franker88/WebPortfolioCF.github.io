import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useCVButton } from "../../hooks/useCVButton";
import CVENG from "./cvs/CV_Carlos_Franco_ENG.pdf";
import CVESP from "./cvs/CV_Carlos_Franco_ESP.pdf";
import "./CVButton.css";

const CVButton = () => {
  const { visible, handleVisible } = useCVButton();

  return (
    <div className="CV-container">
      <div className="CV-Button" onClick={() => handleVisible()}>
        <h4>CV</h4>
        <FontAwesomeIcon icon={faDownload} className="dl-icon" />
      </div>
      <div className={`Lang ${visible ? "Show" : "Hide"}`}>
        <a
          href={CVENG}
          target="_blank"
          rel="noreferrer"
          className="dl-language eng download"
        >
          <span>ENG</span>
        </a>
        <a
          href={CVESP}
          target="_blank"
          rel="noreferrer"
          className="dl-language esp download"
        >
          <span>ESP</span>
        </a>
      </div>
    </div>
  );
};

export { CVButton };
