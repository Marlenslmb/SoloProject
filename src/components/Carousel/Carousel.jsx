import React from 'react';
import MainVideo from '../Video/MainVideo.mp4';

const CarouselMy = () => {
    return (
        <>
        <video  autoplay="true" loop="true" muted style={{width: '100%',}}>
            <source src={MainVideo}type="video/mp4" />
        </video>
        </>
    );
};

export default CarouselMy;