import React, { useState } from 'react'
import "../styles/navbar.css"
import clublogo from '../Assets/Icons/clubLogo.png'
import BurgermenuIcon from "../Assets/Icons/burgerMenuIcon.png"
import closeicon from "../Assets/Icons/closeIcon.png"

export default function Navbar() {

    const [BurgerMenuvisibility, setBurgerMenuvisibility] = useState(false)

    function toggleBurgerMenu() {
        setBurgerMenuvisibility(!BurgerMenuvisibility)
    }

    return (<>
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

    </>
    )
}
