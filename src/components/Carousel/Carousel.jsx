import React from 'react';

const Carousel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={35000}>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={15000}>
                <video>
                    <source src='https://youtube.com/clip/Ugy9rXQ1mBc5-CHNBq94AaABCQ'/>
                </video>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <video>
                    <source src='https://youtube.com/clip/Ugzz5dzWWw3FFx3lRQ94AaABCQ'/>
                </video>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousel;