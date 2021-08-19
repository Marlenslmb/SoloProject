import { Button } from '@material-ui/core';
import React from 'react';
import './MainBody.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainBody = () => {

    useEffect(() => {
        AOS.init({
            duration: 1700
        })
    }, [])

    return (
        <>
        <div className='upBody' style={{margin: '0 auto', textAlign: 'center' , width: 1050, color: 'rgb(245, 199, 131)'}}>
            <div style={{fontSize: 50, height: 100}} data-aos="fade-up">
            ПРИСОЕДИНИТЕСЬ К <br/>
            БИТВЕ ДРЕВНИХ
            </div>
            <div style={{fontSize: 26, marginTop: 60, marginBottom: 60, fontFamily: 'Noto-sans san-serif'}}>
            Каждый день миллионы игроков по всему миру вступают в командную битву 5 на 5 в роли одного из более чем сотни героев. Dota — глубочайшая многопользовательская стратегия всех времён, в которой всегда найдётся место новой стратегии или тактике. Она совершенно бесплатна, и это не поменяется — начинайте защищать своего Древнего уже сейчас.
            </div>
        </div>
        <div className='bottomBody'>
        <div style={{fontSize: 80, color: 'rgb(245, 199, 131)',}} className="forImage" >
            <div data-aos="fade-up"
            data-aos-duration="1700">
                <span style={{fontSize: 50,}}>
                    КОГО ВЫ
                </span> 
                <span style={{fontSize: 80}}> 
                    <br />
                    ВЫБЕРЕТЕ?
                </span>
            </div>
        </div>
        <div style={{fontSize: 30, color: 'rgb(245, 199, 131)', margin: '0 auto', width: 1050, textAlign: 'center', fontFamily: 'Noto-sans san-serif'}}>Список героев в Dota 2 огромен и безгранично разнообразен: здесь вы встретите и магов-тактиков, и свирепых громил, и хитроумных негодяев. Их невероятные способности и сокрушительные ульты непременно приведут вас к победе.</div>
        </div>
        <div style={{width:300, margin: '0 auto', textAlign: 'center'}} className="heroes">
            <Link to='/heroes' style={{textDecoration: 'none'}}>
                <Button style={{fontSize: 28, color: 'whitesmoke', border: '1px solid white', marginTop: 30, marginBottom: 30}}>
                    ВСЕ ГЕРОИ
                </Button>
            </Link>
        </div>

        </>
    );
};

export default MainBody;