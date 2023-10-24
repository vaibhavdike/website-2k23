import React from 'react'
import "../styles/Testimonials.css"
import photo from "../Assets/Icons/clubLogo.png"

export default function Testimonials() {
    return (
        <div id='Testimonials'>
            <h1>
                Testimonials
            </h1>
            <div>
                <div className="cards">
                    <div className='card'>
                        <div className='quote'>complimentary subscruption to communications, chapter members are elegible for a three months complimentry electronic subscription to ACM's flagship publication communication of the ACM</div>
                        <div>
                            <div className='card-img'>
                                <img src={photo} alt='' />
                            </div>
                            <p>Name</p>
                            <p>Position</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='quote'>complimentary subscruption to communications, chapter members are elegible for a three months complimentry electronic subscription to ACM's flagship publication communication of the ACM</div>
                        <div>
                            <div className='card-img'>
                                <img src={photo} alt='' />
                            </div>
                            <p>Name</p>
                            <p>Position</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
