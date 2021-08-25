import { Button, IconButton, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { commentContext } from './CommentsContext';

const useStyles = makeStyles((theme) => ({
    comment: {
        width: 200,
        // border: '2px solid black',
        marginBottom: 10,
        justifyContent: 'center',
        
    },
    users: {
        color: 'red'
    }
}))

const Comments = (props) => {
    const { addComments } = useContext(commentContext);
    // let history = useHistory()
    console.log(props)
    const [value, setValue] = useState({
        name: '',
        desc: '',
        heroId: null,
    })
    const  classes = useStyles()

    const handleInp = (e) => {
        let obj = {
            ...value,
            name: props.name,
            heroId: props.heroId,
            [e.target.name] : e.target.value
        }
        setValue(obj)
    }

    const handleSave = () => {
        if(!value.name){
            value.name = ""
        }
        console.log(value);
        addComments(value)
    }

    return (
        <div className={classes.comment} >
            <TextField name="desc" onChange={handleInp} value={value.desc} variant='outlined' style={{backgroundColor: 'red' }} />
            <IconButton aria-label="share" onClick={handleSave}>
                <Button variant="contained" color="#2c6335" className='btnAdd' style={{backgroundColor: 'red'}} >Добавить комментарий</Button>
            </IconButton>
        </div>
    );
};

export default Comments;