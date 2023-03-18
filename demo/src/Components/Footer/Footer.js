import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div style={{ backgroundColor: "blueviolet", display: "flex", justifyContent: "space-between", alignItems: "center", color: "white", position: "fixed", left: "0", bottom: "0", width: "100%", height: "60px" }}>
      <p style={{ margin: "0", padding: "10px", fontFamily: "Arial", fontSize: "16px" }}>All rights reserved TheTeaser &copy; 2023</p>
      <ul style={{listStyleType: "none", display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 40px" }}>
        <li>
          <a href="https://web.facebook.com/TheTeaser98" style={{listStyleType: "none", color: "white", fontSize: "16px", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faFacebook} size="lg" style={{ margin: "10px" }} />
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" style={{ listStyleType: "none",color: "white", fontSize: "16px", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faTwitter} size="lg" style={{ margin: "10px" }} />
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rakan-almadani-b77281179/" style={{ listStyleType: "none",color: "white", fontSize: "16px", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ margin: "10px" }} />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
