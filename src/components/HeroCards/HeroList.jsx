import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { dotaContext } from '../DotaContext/DotaContext';
import HeroCard from './HeroCard';
import './paginated.css'

const HeroList = () => {
    let history = useHistory()
    const { heroes, getHeroes, paginatedPages } = useContext(dotaContext)
    const [page, setPage] = useState(getPage())

    useEffect(() => {
        getHeroes(history)
    }, [])

    function getPage(){
        const search = new URLSearchParams(history.location.search)
        if(!search.get('_page')){
            return 1
        }
        return search.get('_page')
    }

    const handlePage = (e, pageVal) => {
        const search = new URLSearchParams(history.location.search)
        search.get('_page', pageVal)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getHeroes(history)
        setPage(pageVal)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

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
            <div className="paginatedDiv">
                <Pagination
                count={paginatedPages}
                color="secondary"
                onChange={handlePage}
                page={+page}
                />
            </div>
        </>
    );
};

export default HeroList;