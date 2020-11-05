import React from 'react'

 
import "./Home.css"



import AliceCarousel from 'react-alice-carousel';
import image1 from "../img/amazon.banner.jpg";
import image2 from "../img/borat.jpg";
import image3 from "../img/amazon.fashion.jpg";
import image4 from "../img/audible.banner.jpg";
import image5 from "../img/epic.deals.jpg";
import image6 from "../img/alexa.image.jpg";



function Home() {
    return (
        <div className="home__image">
            {/* Carousel of mulitple images like the current amazon site */}
            <AliceCarousel className ="carousel" 
                autoPlay 
                autoPlayInterval="1700" 
                infinite="true" 
                disableButtonsControls="true" 
                disableDotsControls="true"
                autoWidth="true"
                autoHeight="true"
                >
             
               {/* Images used in the carousel */}
                <img src={image1} className="sliderimg" alt="christmas" />
                <img src={image2} className="sliderimg" alt="borat" />
                <img src={image3} className="sliderimg" alt="fashion" />
                <img src={image4} className="sliderimg" alt="audible" />
                <img src={image5} className="sliderimg" alt="epic" />
                <img src={image6} className="sliderimg" alt="alexa" /> 
           </AliceCarousel>
        </div>
    )
}

export default Home
            
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

               

                












