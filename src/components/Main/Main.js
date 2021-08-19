import { Grid } from '@material-ui/core';
import React from 'react';
import Carousel from '../Carousel/Carousel';
import Content from './Content';
import HeroList from '../HeroCards/HeroList';

const Main = (props) => {

    return (
        <Grid>
            <Carousel />
            <Content />
            {/* <HeroList /> */}
        </Grid>
    );
};

export default Main;