import { Button, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dotaContext } from '../DotaContext/DotaContext';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import './paginated.css'
import Comments from '../comments/Comments';
import CommentList from '../comments/CommentList';
import { useAuth } from '../DotaContext/AuthContext';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: '40px auto',
        maxWidth: '750px',
        height: 'auto',
        backgroundColor: 'rgb(245, 199, 131)',
        display: 'block',
        flexDirection: 'column'
    }
}))

const Details = ({item, history}) => {
    const {id} = useParams()
    const {detail, getDetail, deleteHeroes, addHeroesInCart, checkHeroesInCart} = useContext(dotaContext)
    const classes = useStyles()
    const {currentUser} = useAuth();

    console.log(detail)
    useEffect(() => {
        getDetail(id)
    }, [id])

    useEffect(()=> {
        console.log(detail)
    }, [detail])

    return (
        <>
        <Paper elevation={3} className={classes.paper}>
            {
                detail ? (

                    <div id='imagedetail' style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', paddingBottom: '100px'}}>
                        <div style={{margin: '0 auto'}}>
                            <img style={{width: '100%',}} src={detail.image} alt="" />
                        </div>
                        <div style={{
                            width: '100%',
                            // flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',

                        }}>
                            <Typography variant='h3' gutterBottom style={{fontFamily: 'Noto-sans san-serif'}}>{detail.name}</Typography>
                            <Typography variant='subtitle1' gutterBottom style={{fontWeight: 'bold', fontSize: 30, fontFamily: 'Noto-sans san-serif'}}>Главный атрибут : {detail.type}</Typography>
                            <Typography variant='body1' gutterBottom style={{fontFamily: 'Noto-sans san-serif', width: '100%'}}>{detail.description}</Typography>
                            <Link to={`/edit/${id}`} style={{textDecoration: 'none'}}>
                                <Button variant="contained" color="#2c6335" style={{fontFamily: 'Noto-sans san-serif',backgroundColor: 'red', textDecoration: 'none', justifyContent: 'flex-end'}}>Изменить</Button>
                            </Link>
                            <Link to='/heroes' style={{textDecoration: 'none'}}>
                                <Button variant="contained" onClick={() => deleteHeroes(id, history)} color="#2c6335" style={{fontFamily: 'Noto-sans san-serif',backgroundColor: 'red', textDecoration: 'none', justifyContent: 'flex-end'}}>Удалить</Button>
                            </Link>
                            <IconButton color="secondary" onClick={() => addHeroesInCart(detail)}>
                                <StarOutlineIcon style={{textDecoration: 'none', justifyContent: 'flex-end', }} color={checkHeroesInCart(detail.id) ? "primary" : "inherit"} />
                            </IconButton>
                        </div>

                    </div>

                ) : (<h1>Loading...</h1> )
            }
        </Paper>
        <div style={{display: 'flex', width: '100%',justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <Comments name={currentUser?.email || 'guest'} heroId={detail.id}/>
            <CommentList detailId={id} history={history} />
        
        </div>
        </>
    );
};

export default Details;