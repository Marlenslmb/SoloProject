import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dotaContext } from '../DotaContext/DotaContext';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: '40px auto',
        maxWidth: 1300,
        height: 'auto',
        backgroundColor: 'rgb(245, 199, 131)'
    }
}))

const Details = ({ history}) => {
    const {id} = useParams()
    const {detail, getDetail, deleteHeroes} = useContext(dotaContext)
    const classes = useStyles()

    console.log(detail)
    useEffect(() => {
        getDetail(id)
    }, [id])

    return (
        <Paper elevation={3} className={classes.paper}>
            {
                detail ? (
                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <div>
                            <img style={{width: '500px', height: '500px'}} src={detail.image} alt=""/>
                        </div>
                        <div style={{
                            width: '700px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            flexWrap: 'wrap'

                        }}>
                            <Typography variant='h3' gutterBottom style={{fontFamily: 'Noto-sans san-serif'}}>{detail.name}</Typography>
                            <Typography variant='subtitle1' gutterBottom style={{fontWeight: 'bold', fontSize: 26, fontFamily: 'Noto-sans san-serif'}}>{detail.type}</Typography>
                            <Typography variant='body1' gutterBottom style={{fontFamily: 'Noto-sans san-serif'}}>{detail.description}</Typography>
                            <Link to={`/edit/${id}`}>
                                <Button variant="contained" color="#2c6335" style={{fontFamily: 'Noto-sans san-serif',backgroundColor: 'rgb(245, 199, 131)',}}>Изменить</Button>
                            </Link>
                            <Link to='/heroes'>
                                <Button variant="contained" onClick={() => deleteHeroes(id, history)} color="#2c6335" style={{fontFamily: 'Noto-sans san-serif',backgroundColor: 'rgb(245, 199, 131)',}}>Удалить</Button>
                            </Link>
                        </div>
                    </div>

                ) : (<h1>Loading...</h1> )
            }
        </Paper>
    );
};

export default Details;