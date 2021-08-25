import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';
import AddHero from './components/CRUD/AddHero';
import DotaContextProvider from './components/DotaContext/DotaContext';
import BottomFooter from './components/BottomFooter/BottomFooter';
import Details from './components/HeroCards/Details';
import EditHero from './components/CRUD/EditHero';
import Content from './components/Main/Content';
import AuthContextProvider from './components/DotaContext/AuthContext';
import Login from './components/Auth/Login';
import Registr from './components/Auth/Registr';
import Favorites from './components/Favorites/Favorites';
import CommentsProvider from './components/comments/CommentsContext';
import ForgotPassword from './components/Auth/ForgotPassword';

const Routes = () => {
    return (
        <>
        <AuthContextProvider>
            <DotaContextProvider>
                <CommentsProvider>
                    <BrowserRouter>
                        <Footer />
                        <Navbar />
                            <Switch>
                                <Route exact path='/' component={Main} />
                                <Route exact path='/heroes' component={Content} />
                                <Route exact path='/add' component={AddHero} />
                                <Route exact path='/detail/:id' component={Details} />
                                <Route exact path='/edit/:id' component={EditHero} />
                                <Route exact path='/login' component={Login} />
                                <Route exact path='/registration' component={Registr} />
                                <Route exact path='/favorite' component={Favorites} />
                                <Route exact path='/forgot-password' component={ForgotPassword} />
                            </Switch> 
                        <BottomFooter />
                    </BrowserRouter> 
                </CommentsProvider>
            </DotaContextProvider>
        </AuthContextProvider>
        </>
    );
};

export default Routes;