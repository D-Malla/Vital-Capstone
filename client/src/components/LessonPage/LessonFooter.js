import React from "react";
import "../../styles/Lesson.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default props => {
  return (
    <footer id="lessonFooterContainer">
      <div className="footerLogoDiv">
        <h1>Vital</h1>
      </div>
      <div className="footerInfoDiv">
        <p>© Vital 2019</p>
        <Link to="/">
          <p>Privacy Policy</p>
        </Link>
        <Link to="/">
          <p>Terms of Use</p>
        </Link>
      </div>
      <div className="footerSocialDiv">
        <Link to="/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </footer>
  );
};
