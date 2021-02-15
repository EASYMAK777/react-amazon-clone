import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import Cheezit from '../img/cheez-its.jpg';
import Doritos from "../img/doritos.jpg";
import Oreos from "../img/oreos.jpg";

class ImageGallery extends React.Component {

    // onChangeEvent = () => {
    //     console.log('onChange Event Triggered');
    // }

    // onClickItemEvent = () => {
    //     console.log('onClickItem Event Triggered');
    // }

    // onClickThumbEvent = () => {
    //     console.log('onClickThumb Event Triggered');
    // }

    // onSwipeStartEvent = () => {
    //     console.log('onSwipeStart Event Triggered');
    // }

    // onSwipeEndEvent = () => {
    //     console.log('onSwipeEnd Event Triggered');
    // }

    // onSwipeMoveEvent = () => {
    //     console.log('onSwipeMove Event Triggered');
    // }
    render() {
        return(
            <div className = "carousel__main"
             
            >
                
                <Carousel 
                    
                    autoPlay interval = "1000" 
                    transitionTime ="500"
                    infiniteLoop="true"
                    interval="5000"
                    dynamicHeight="true"
                    
                >
                    <div>
                        <img 
                         src={Oreos}
                         alt="product-image"
                         className="carousel__product"
                        />
                    </div>
                    <div>
                        <img src = {Doritos}
                         alt="product-image"
                         className="carousel__product"
                        />
                    </div>
                    {/* <div>
                        <img src = {Doritos}
                         alt="product-image"
                         className="carousel__product"
                        />
                    </div> */}
                </Carousel>
            </div>
        )
    };
}

export default ImageGallery