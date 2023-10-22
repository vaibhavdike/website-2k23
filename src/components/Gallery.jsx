import React from 'react'
import "../styles/gallery.css"
import image1 from "../Assets/galleryImages/image1.png"

export default function gallery() {

    let galleryImages = [
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
    ]

    function renderAllImages() {
        let allImagesConponents = []
        for (let i = 0; i < galleryImages.length; i += 2) {
            allImagesConponents.push(<div>
                <img src={galleryImages[i]} alt='' />
                <img src={galleryImages[i + 1]} alt='' />
            </div>)
        }
        return allImagesConponents
    }
    return (
        <div id="gallery">
            <div className='headBar'>
                <p>Notifications and Updates</p>
            </div>
            <div className='galleryContainer'>
                {renderAllImages()}
            </div>
        </div>
    )
}
