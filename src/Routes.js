import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';
import AddHero from './components/CRUD/AddHero';
import DotaContextProvider from './components/DotaContext/DotaContext';
import CarouselMy from './components/Carousel/Carousel';
import MainBody from './components/MainBody/MainBody';
import BottomFooter from './components/BottomFooter/BottomFooter';
import HeroList from './components/HeroCards/HeroList';
import CarouselsCard from './components/CarouselCard/CarouselCard';

const Routes = () => {
    return (
        <DotaContextProvider>
            <BrowserRouter>
                <Footer />
                <Navbar />
                <CarouselMy />
                <MainBody />  
                    <Switch>
                        <Route exact path='/' compponent={Main} />
                        <Route exact path='/add' component={AddHero} />
                        <Route exact path='/heroes' component={HeroList} />
                    </Switch> 
                <CarouselsCard />
                <BottomFooter />
            </BrowserRouter>
        </DotaContextProvider>
    );
};

export default Routes;