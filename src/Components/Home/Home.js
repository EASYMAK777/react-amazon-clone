import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "./Home.css"
import image1 from "../img/amazon.banner.jpg"
import image2 from "../img/borat.jpg"

function Home() {
    return (
        <div className="home">
            <AliceCarousel className ="carousel" autoPlay autoPlayInterval="900">
             <img src={image1} className="sliderimg" alt="christmas"/>
             <img src={image2} className="sliderimg" alt="borat" />
 
            </AliceCarousel>




        </div>
    )
}

export default Home
 