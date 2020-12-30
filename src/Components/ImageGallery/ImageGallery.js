import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

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
                        <img src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s150x150/105972792_805750909958786_504637890774604643_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=qvjKVESNLMoAX9dSCKr&tp=1&oh=1c64cc58031935bc9018df36b4e0cf05&oe=600D726B" 
                         alt="product-image"
                         className="carousel__product"
                        />
                    </div>
                    <div>
                        <img src ="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s150x150/105972792_805750909958786_504637890774604643_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=qvjKVESNLMoAX9dSCKr&tp=1&oh=1c64cc58031935bc9018df36b4e0cf05&oe=600D726B" 
                         alt="product-image"
                         className="carousel__product"
                        />
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGallery