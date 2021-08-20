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
import Details from './components/HeroCards/Details';
import EditHero from './components/CRUD/EditHero';
import Content from './components/Main/Content';

const Routes = () => {
    return (
        <>
         <DotaContextProvider>
            <BrowserRouter>
                <Footer />
                <Navbar />
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route exact path='/heroes' component={Content} />
                        <Route exact path='/add' component={AddHero} />
                        <Route exact path='/detail/:id' component={Details} />
                        <Route exact path='/edit/:id' component={EditHero} />
                    </Switch> 
                <BottomFooter />
            </BrowserRouter> 
        </DotaContextProvider>
        </>
    );
};

export default Routes;