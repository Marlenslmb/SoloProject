import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Carousel from './components/Carousel/Carousel';
import Main from './components/Main/Main';

const Routes = () => {
    return (
        <BrowserRouter>
            <Footer />
            <Navbar />
            <Carousel />
                <Switch>
                    <Route exact path='/' compponent={Main} />
                </Switch>
        </BrowserRouter>
    );
};

export default Routes;