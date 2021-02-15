import React from 'react'

 
import "./Home.css"
import Product from "../Product/Product"
import Image0 from "../img/blistlyfe-logo-3.jpg";
import Image1 from "../img/blistlyfe-logo-2.jpg";
import Cheezit from "../img/cheez-its.jpg";
import Doritos from "../img/doritos.jpg";
import Oreos from "../img/oreos.jpg";
import Pebbles from "../img/Fruity-Pebble-Cereal-Treats-Recipe-3.jpg"
import Sourpatch from "../img/sourpatch.jpg"

import Carousel from '../ImageGallery/ImageGallery'
import '../ImageGallery/ImageGallery.css'






function Home() {
    return (
        <div className="home">   
            <img 
            src={Image0}
            className="home__image" 
            alt="banner" 
            />

            {/* <div className = "carousel"> */}
                <Carousel/>

            {/* </div> */}

            <div className="home__row">
                <Product
                    id="12342412"
                    title="Cheez-itz"
                    price={15.99}
                    rating={5}
                    image={Cheezit} 
                    />
                <Product
                    id="12342412"
                    title="Fruity Pebbles"
                    price={15.99}
                    rating={5}
                    image={Pebbles} 
                    />
            </div> 
            <div className="home__row">
                <Product
                    id="12342412"
                    title="Oreos"
                    price={25.99}
                    rating={5}
                    image={Oreos} 
                    />
                <Product
                    id="12342412"
                    title="Sour Patch Kids"
                    price={25.99}
                    rating={5}
                    image={Sourpatch} 
                    />
                <Product
                    id="12342412"
                    title="Doritos"
                    price={18.99}
                    rating={5}
                    image={Doritos} 
                    />    
            </div> 

            


            <div className="home__row">
                <Product
                    id="12342412"
                    title="Doritos Variety Pack"
                    price={299.99}
                    rating={5}
                    image={Doritos} 
                    />
            </div> 
            <div className="home__row">
                <Product
                    id="12342412"
                    title="Cheez-itz"
                    price={15.99}
                    rating={5}
                    image={Cheezit} 
                    />
                <Product
                    id="12342412"
                    title="Fruity Pebbles"
                    price={15.99}
                    rating={5}
                    image={Pebbles} 
                    />
            </div> 

            
            <div className="home__row">
                <Product
                    id="12342412"
                    title="Doritos Variety Pack"
                    price={299.99}
                    rating={5}
                    image={Doritos} 
                    />
            </div> 
                
            
            
            

            
             
        </div>
        )
    }
    
    export default Home
    
            


                
               
               
               

                    


                    
            




             
    
    
    
    
    
    ////PENDING CAROUSEL SET-UP
    
    
    
    
    
    {/* Carousel of mulitple images like the current amazon site */}
    {/* <AliceCarousel className ="carousel" 
    autoPlay 
    autoPlayInterval="20000" 
    infinite="true" 
    disableButtonsControls="true" 
    disableDotsControls="true"
        autoWidth="true"
        autoHeight="false"
    > */}
    
    
    
    
    
    
    
    
    
    
//     {/* Images used in the carousel */}
//      <img src={image1} className="sliderimg" alt="christmas" />
//      <img src={image2} className="sliderimg" alt="borat" />
//      <img src={image3} className="sliderimg" alt="fashion" />
//      <img src={image4} className="sliderimg" alt="audible" />
//      <img src={image5} className="sliderimg" alt="epic" />
//      <img src={image6} className="sliderimg" alt="alexa" /> 
// </AliceCarousel>











// import AliceCarousel from 'react-alice-carousel';
// import image1 from "../img/amazon.banner.jpg";
// import image2 from "../img/borat.jpg";
// import image3 from "../img/amazon.fashion.jpg";
// import image4 from "../img/audible.banner.jpg";
// import image5 from "../img/epic.deals.jpg";
// import image6 from "../img/alexa.image.jpg";
