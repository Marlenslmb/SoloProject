import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Badge, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { dotaContext } from '../DotaContext/DotaContext';
import './navbar.css'
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const { cartLength } = useContext(dotaContext)

  return (
    <div className={classes.root} id='navbar' >
      <AppBar position="static" style={{backgroundColor: '#181a1b'}} className="appbarfor" >
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> <img src="https://icon-library.com/images/dota-2-icon/dota-2-icon-28.jpg" alt="#" style={{width: 75, height: 50}}/>
          </IconButton>
          <Link to='/' style={{textDecoration: 'none', color: 'whitesmoke'}}>
            <Typography color="inherit" style={{marginRight: 25}} className='textdota' >
             <h2 className='h2d2'>
               DOTA 2
               </h2>
            </Typography>
          </Link>
          <Link to='/heroes' style={{textDecoration: 'none', color: 'whitesmoke'}} >
            <Button color="inherit" style={{fontSize: 25}} className='btnfornav' >
              ГЕРОИ
            </Button>
          </Link>
          <Link to="/favorite">
              <IconButton color="secondary">
                <Badge badgeContent={cartLength}>
                  <StarOutlineIcon style={{marginTop: 7}}/>
                </Badge>
              </IconButton>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
