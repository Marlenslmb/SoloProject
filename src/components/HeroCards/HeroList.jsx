import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { dotaContext } from '../DotaContext/DotaContext';
import Filter from '../Filter/Filter';
import HeroCard from './HeroCard';
import './paginated.css'

const HeroList = () => {
    let history = useHistory()
    const { heroes, getHeroes, paginatedPages } = useContext(dotaContext)
    const [page, setPage] = useState(getPage())
    const [searchVal, setSearchVal] = useState(getSearchVal() || '')

    useEffect(() => {
        getHeroes(history)
    }, [])
    console.log(paginatedPages);

    function getPage(){
        const search = new URLSearchParams(history.location.search)
        if(!search.get('_page')){
            return 1
        }
        return search.get('_page')
    }

    const handlePage = (e, pageVal) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', pageVal)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getHeroes(history)
        setPage(pageVal)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    function getSearchVal(){
        const search = new URLSearchParams(history.location.search)
        return search.get('q')
    }

    const handleValue = (e) => {
        const search = new URLSearchParams(history.location.search)
        search.set('q', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setSearchVal(e.target.value)
        getHeroes(history)
    }

    return (
        <>
        <div className="divdivdiv">
            <Form className="d-flex" style={{width: 350, height: 50, marginRight: 20, alignItems: 'center'}}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    style={{backgroundColor: 'rgb(245, 199, 131)'}}
                    value={searchVal}
                    onChange={handleValue}
                />
                <Button variant="outline-success" style={{backgroundColor: 'rgb(245, 199, 131)', color: 'black'}}>Search</Button>
            </Form>

            <Filter />
        </div>
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