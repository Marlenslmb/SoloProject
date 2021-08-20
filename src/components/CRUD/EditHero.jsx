import { Button, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { dotaContext } from '../DotaContext/DotaContext';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto',
        backgroundColor: 'rgb(245, 199, 131)',
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '40ch',
        }}
}))

const EditHero = () => {

    const {id} = useParams()
    let history = useHistory()
    const classes = useStyles()
    const {edit, editHeroes, saveEditHero} = useContext(dotaContext)
    const [values, setValues] = useState(null)

    useEffect(() => {
        editHeroes(id)
    }, [id])

    useEffect(() => {
        setValues(edit)
    }, [edit])

    const handleEditInp = (e) => {
        let obj = {
            ...values,
            [e.target.name] : e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        saveEditHero(values)
        history.push('/heroes')
    }


    return (
        <Paper elevation={3} className={classes.paper}>
        <h1>Введите изменения</h1>
        {
            values ? (
                <div style={{display: 'flex', justifyContent: 'space-between', color: 'black'}}>
                <div>
                    <img style={{width: '500px'}} src={values.image} alt="dota image"/>
                </div>

                <div
                    style={{
                        width: '450px',  
                        display: 'flex', 
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>                           
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField name="image" onChange={handleEditInp} value={values.image} variant="outlined" label=""/>
                        <TextField name="title" onChange={handleEditInp} value={values.name} variant="outlined" label=""/>
                        <TextField name="type" onChange={handleEditInp} value={values.type} variant="outlined" label=""/>
                        <TextField name="description" onChange={handleEditInp} value={values.description} variant="outlined" label=""/>
                    </form>
                        <IconButton aria-label="share" onClick={() => handleSave()}>
                            <Button variant="contained" style={{backgroundColor: 'whitesmoke'}}>Save</Button>
                        </IconButton>
                </div>
            </div>
            ) : (<h1>Loading...</h1> )
        }
    </Paper>
    );
};

export default EditHero;