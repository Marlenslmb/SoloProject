import { Button, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { dotaContext } from '../DotaContext/DotaContext';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto'
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '40ch',
        }}
}))

const AddHero = () => {
    const classes = useStyles()
    let history = useHistory()
    const [values, setValues] = useState({
        image: '',
        name: '',
        type: '',
        description: '',
    })

    const { addHeroes } = useContext(dotaContext)

    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name] : e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        if(!values.image){
            values.image = "https://images2.alphacoders.com/474/thumb-1920-474206.jpg"
        }
        addHeroes(values)
        history.push('/')
    }

    return (
        <Paper elevation={3} className={classes.paper} style={{background: '#44814e'},{color:'#fff'},{height:'100%'}}>
            <h1 style={{textAlign: 'center'}}>Добавить героя</h1>
            <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
                <div>
                    <img src={values.image ? values.image : "https://images2.alphacoders.com/474/thumb-1920-474206.jpg"} style={{width: '400px'}} alt="hero Image"/>
                </div>
                <div style={{
                            width: '450px',
                            display:'flex',
                            alignItems:'center',
                            flexDirection:'column',
                            justifyContent:'center'
                        }}>
                        <form className={classes.root} noValidate autoComplete='off'>
                            <TextField name='image' onChange={handleInp} value={values.image} variant='outlined' label='Image' />
                            <TextField name='name' onChange={handleInp} value={values.name} variant='outlined' label='Title' />
                            <TextField name='type' onChange={handleInp} value={values.type} variant='outlined' label='Type' />
                            <TextField name='description' onChange={handleInp} value={values.description} variant='outlined' label='Description' />
                        </form>
                        <IconButton aria-label="share" onClick={handleSave}>
                            <Button variant="contained" color="#2c6335">Добавить</Button>
                        </IconButton>
                </div>


            </div>
            
        </Paper>
    );
};

export default AddHero;