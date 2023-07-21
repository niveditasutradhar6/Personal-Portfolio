import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
    
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/nivedita-sutradhar-', '_blank')} />
      <GithubIcon onClick={() => window.open('https://github.com/niveditasutradhar6','_blank')} />
      
       
      </div>
      <p> &copy; 2023 Nivedita</p>
    </div>
  );
}

export default Footer;
