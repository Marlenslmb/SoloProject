import { Grid } from '@material-ui/core';
import React from 'react';
import Carousel from '../Carousel/Carousel';
import Content from './Content';
import HeroList from '../HeroCards/HeroList';
import DotaContextProvider from '../DotaContext/DotaContext';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import CarouselMy from '../Carousel/Carousel';
import MainBody from '../MainBody/MainBody';
import CarouselsCard from '../CarouselCard/CarouselCard';
import BottomFooter from '../BottomFooter/BottomFooter';
import Footer from '../Footer/Footer';

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