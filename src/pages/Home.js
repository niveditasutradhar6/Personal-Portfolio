import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Skills from "./Skills";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Nivedita</h2>
        <div className="prompt">
          <p>An aspiring Front-End Web Developer and AI/ML Enthusiast.</p>
          
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/nivedita-sutradhar-', '_blank')}  />
          <EmailIcon onClick={() => window.open('https://mail.google.com/mail/u/2/', '_blank')}  />

           <GithubIcon onClick={() => window.open('https://github.com/niveditasutradhar6','_blank')} />
          
        </div>
      </div>
     <Skills/>
    </div>
  );
}

export default Home;
