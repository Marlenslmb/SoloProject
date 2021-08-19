import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import AOS from 'aos';
import { useEffect } from "react";

const CarouselsCard = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  });
  const { v4: uuidv4 } = require('uuid');
  useEffect(() => {
      AOS.init({
          duration: 1700
      })
  }, [])

  let slides = [
    {
      key: uuidv4(),
      content: <img src="https://besthqwallpapers.com/Uploads/8-4-2019/86793/thumb2-arc-warden-4k-dota-2-monster-night.jpg" alt="Arc Warden" />
    },
    {
      key: uuidv4(),
      content: <img src="https://3.bp.blogspot.com/-sFJTlMQmoPI/WlHJ1pNiCTI/AAAAAAAABCE/X2hqwpqvfUQ3NC2_RXJx-iiewPura9nHACLcBGAs/s1600/dota9.JPG" alt="Mortred" />
    },
    {
      key: uuidv4(),
      content: <img src="https://wallpapercave.com/wp/wp2665942.jpg" alt="Anub-Arak" />
    },
    {
      key: uuidv4(),
      content: <img src="https://images.hdqwalls.com/wallpapers/dota-2-kunkka-warriors-4k-58.jpg" alt="Kunkka" />
    },
    {
      key: uuidv4(),
      content: <img src="https://i.pinimg.com/originals/49/ea/a0/49eaa0adb83237b029a08198f5b0d573.jpg" alt="Faceless void" />
    },
    {
      key: uuidv4(),
      content: <img src="https://c4.wallpaperflare.com/wallpaper/559/331/661/akasha-female-devils-demons-beautiful-girl-in-dota-2-queen-of-pain-hd-wallpaper-3840%C3%972400-wallpaper-preview.jpg" alt="Akasha" />
    },
    {
      key: uuidv4(),
      content: <img src="https://images2.alphacoders.com/108/1080239.jpg" alt="Anti-Mage" />
    },
    {
      key: uuidv4(),
      content: <img src="https://lh3.googleusercontent.com/CooEat80hdWAIBReHDn1YBM6eZwNnSqTApprgDABi0By-ljSDRiYugwNQiV9a44e5ci4=h1024-no-tmp_dota_2_hd_4k_apk_screenshot_9.jpg" alt="Alchemist" />
    },
    {
      key: uuidv4(),
      content: <img src="https://www.wallpapertip.com/wmimgs/46-462705_dota-2-invoker-wallpaper-4k.jpg" alt="Invoker" />
    },
    {
      key: uuidv4(),
      content: <img src="https://i.pinimg.com/originals/ef/5b/f6/ef5bf63d77b000356054c3e9d449a539.jpg" alt="Yurnero" />
    },
    {
      key: uuidv4(),
      content: <img src="https://i.pinimg.com/originals/32/d4/5f/32d45fc400eb4c24d60b7197ad8e3f11.jpg" alt="Nevermore" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

//   const onChangeInput = (e) => {
//     setState({
//       [e.target.name]: parseInt(e.target.value, 10) || 0
//     });
//   };

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <div data-aos="zoom-in-down">
    <div
      style={{ width: "70%", height: "500px", margin: "0 auto" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
        />
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
      </div>
    </div>
    </div>
  );
};

export default CarouselsCard;
