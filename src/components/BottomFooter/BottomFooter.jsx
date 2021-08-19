import React from 'react';
import './bottomFooter.css';

const BottomFooter = () => {
    return (
        <div>
            <div className="bottomFooterMain" >
                <span className="imageSpan" >
                ВСТУПАЙТЕ В
                    <br />
                    БИТВУ
                </span>
            </div>
            <div className="bottomSecondFooter">
                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png" className="firstimage" />
                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png" className="secondimage" />
            </div>
            <div style={{width: 650, margin: '0 auto', marginTop: 30, textAlign: 'center'}}>
                <p style={{color: '#505050', fontSize: 20, marginBottom: 0}}>Dota и логотип Dota являются товарными знаками и/или зарегистрированными товарными знаками Valve Corporation. 2021 Valve Corporation, все права защищены.</p>
            </div>
        </div>
    );
};

export default BottomFooter;