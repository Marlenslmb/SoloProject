import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { dotaContext } from '../DotaContext/DotaContext';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, makeStyles, Button } from '@material-ui/core';
import './filter.css'

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const Filter = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const {getHeroes} = useContext(dotaContext);
    const [type, setType] = useState(getType());
    function getType(){
        const search = new URLSearchParams(history.location.search)
        return search.get('type')
    }
    const handleChangeType = (event) => {
        if(event.target.value === 'all'){
            history.push(`${history.location.pathname.replace('type')}`)
            getHeroes(history)
            setType(event.target.value)
            return
        }
        const search = new URLSearchParams(history.location.search)
        search.set('type', event.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getHeroes(history)
        setType(event.target.value)
    }
    const handleDrop = () => {
        history.push(`${history.location.pathname.replace('type')}`)
        getHeroes(history)
        setType(getType())
    }

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div className='btn3'>
            <Button onClick={handleClickOpen} style={{backgroundColor: 'rgb(245, 199, 131)', color: 'black', marginLeft: 20, alignItems: 'center'}}>Open sorting</Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Выберите категорию</DialogTitle>
                    <DialogContent>
                    <form className={classes.container}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Atributes</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={type} onChange={handleChangeType}>
                                <FormControlLabel value="Strength" control={<Radio />} label="Strength" />
                                <FormControlLabel value="Agility" control={<Radio />} label="Agility" />
                                <FormControlLabel value="Intelligence" control={<Radio />} label="Intelligence" />
                            </RadioGroup>
                            </FormControl>
                            <Grid>
                                <Button variant='outlined' color='primary' onClick={handleDrop} >Сбросить</Button>
                            </Grid>
                    </form>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                    </DialogActions>
                </Dialog>
        </div>
    );
};

export default Filter;