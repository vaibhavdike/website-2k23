import "../styles/footer.css"
import React, { useState } from 'react'
import clublogo from '../Assets/Icons/clubLogo.png'
import BurgermenuIcon from "../Assets/Icons/burgerMenuIcon.png"
import closeicon from "../Assets/Icons/closeIcon.png"

function Footer() {

  const [BurgerMenuvisibility, setBurgerMenuvisibility] = useState(false)

    function toggleBurgerMenu() {
        setBurgerMenuvisibility(!BurgerMenuvisibility)
    }
  return (

    <div className="app">
      <div className="content">
        <h1>Smaller Contributions lead to Bigger</h1>
        <p>~ Navyadius Wilburn</p>
        <button>Join Now</button>
      </div>
      <div id="navbar">
            <img src={clublogo} alt="club icon" />
            <div className='navlinks'>
                <span>About</span>
                <span>Event</span>
                <span>gallery</span>
                <span>Team</span>
                <span className='joinBtn'>Join now</span>
            </div>
            <div id='BurgerMenu'>
                <div className='BurgerIcon' onClick={toggleBurgerMenu}>
                    <img src={BurgermenuIcon} alt="options" srcset="" />
                </div>
            </div>
        </div>
        <div id='BurgerMenuLinks' style={{
            display: BurgerMenuvisibility ? "flex" : "none"
        }}>
            <div id="BurgerMenucloseicon" onClick={toggleBurgerMenu}>
                <img src={closeicon} alt='close' />
            </div>
            <span className='joinBtn'>Join now</span>
            <span>About</span>
            <span>Event</span>
            <span>gallery</span>
            <span>Team</span>
        </div>
    </div>
  );
}

export default Footer;
