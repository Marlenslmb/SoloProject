import React from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dotaContext } from '../DotaContext/DotaContext';
import AOS from 'aos';
import { useEffect } from 'react';

const HeroCard = ({item}) => {
    const { deleteHeroes } = useContext(dotaContext)

    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, [])

    return (
        <>
                <div data-aos="zoom-out-down">
                    <Card style={{ width: '18rem', height: 200 , marginTop: '5px', marginBottom: '5px'}} className="cardclass">
                        <Link to={`/detail/${item.id}`} style={{width: '100%', margin: '0 auto', height: "100%"}}>
                        <Card.Img variant="top" style={{width: '100%', margin: '0 auto', height: "100%"}} src={item.image} />
                        </Link>
                    </Card>
                </div>
        </>
    );
};

export default HeroCard;