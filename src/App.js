import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DotaContextProvider from './components/DotaContext/DotaContext';
import Routes from './Routes';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import CarouselMy from './components/Carousel/Carousel';
import MainBody from './components/MainBody/MainBody';
import BottomFooter from './components/BottomFooter/BottomFooter';
import CarouselsCard from './components/CarouselCard/CarouselCard';


function App() {
  return (
        <Routes />
    
  );
}

export default App;
