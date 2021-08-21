import { Grid } from '@material-ui/core';
import React from 'react';
import CarouselMy from '../Carousel/Carousel';
import MainBody from '../MainBody/MainBody';
import CarouselsCard from '../CarouselCard/CarouselCard';

const Main = (props) => {

    return (
        <Grid>
            <CarouselMy />
            <MainBody />
            <CarouselsCard />
        </Grid>
    );
};

export default Main;