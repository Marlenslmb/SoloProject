import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { dotaContext } from '../DotaContext/DotaContext';
import HeroCard from './HeroCard';

const HeroList = () => {
    let history = useHistory()
    const { heroes, getHeroes } = useContext(dotaContext)

    useEffect(() => {
        getHeroes(history)
    }, [])

    return (
        <>
            <Grid container spacing={3} justify="space-evenly" style={{marginTop: '0px'}}>
                {
                    heroes ? (
                        heroes.map((item, index) => (
                            <HeroCard item={item} key={index} history={history} />
                        ))
                    ) : (<h1>wait wait wait</h1>)
                }
            </Grid>
        </>
    );
};

export default HeroList;