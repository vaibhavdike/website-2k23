import "../styles/footer.css"
import React from 'react'
import clublogo from '../Assets/Icons/clubLogo.png'
import instaicon from "../Assets/Icons/instagram.png"
import facebookIcon from "../Assets/Icons/facebook.png"
import linkedInIcon from "../Assets/Icons/linkedIn.png"
import mailIcon from "../Assets/Icons/mail.png"

function Footer() {

  return (
    <div id="footer">
      <div id="footerBanner">
        <p className="quote">Smaller Contributions lead to Bigger</p>
        <p className="by">~ Navyadius Wildurn</p>
        <div className="button">Join Now</div>
      </div>
      <div id="footerContent">
        <div className="logo">
          <img src={clublogo} alt="" />
        </div>
        <div className="links">
          <p>About</p>
          <p>Event</p>
          <p>gallery</p>
          <p>Team</p>
        </div>
        <div className="socials">
          <div><img src={instaicon} alt="instaicon" /></div>
          <div><img src={facebookIcon} alt="facebookIcon" /></div>
          <div><img src={linkedInIcon} alt="linkedInIcon" /></div>
          <div><img src={mailIcon} alt="mailIcon" /></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
