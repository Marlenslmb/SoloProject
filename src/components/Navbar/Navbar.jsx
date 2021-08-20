import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#181a1b'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> <img src="https://icon-library.com/images/dota-2-icon/dota-2-icon-28.jpg" alt="#" style={{width: 75, height: 50}}/>
          </IconButton>
          <Link to='/' style={{textDecoration: 'none', color: 'whitesmoke'}}>
            <Typography variant="h4" color="inherit" style={{marginRight: 25}}>
              DOTA 2
            </Typography>
          </Link>
          <Button color="inherit" style={{fontSize: 25}}>
            ИГРА
          </Button>
          <Link to='/heroes' style={{textDecoration: 'none', color: 'whitesmoke'}} >
            <Button color="inherit" style={{fontSize: 25}}>
              ГЕРОИ
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
