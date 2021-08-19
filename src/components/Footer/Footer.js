import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Grid, IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#181a1b',
    justifyContent: 'flex-end',
    
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <Grid container display='flex' justifyContent='flex-start'>
      <IconButton>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e965704-45d5-4545-a786-8281bc7fc34a/d32l2wh-ccbacc57-d10a-45ba-b4b1-db0ee1bbe817.png/v1/fill/w_256,h_256,strp/steam_game_icon_by_wolfangraul_d32l2wh-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yNTYiLCJwYXRoIjoiXC9mXC8yZTk2NTcwNC00NWQ1LTQ1NDUtYTc4Ni04MjgxYmM3ZmMzNGFcL2QzMmwyd2gtY2NiYWNjNTctZDEwYS00NWJhLWI0YjEtZGIwZWUxYmJlODE3LnBuZyIsIndpZHRoIjoiPD0yNTYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._37Dz-vqiQud7qSIXQg1cRDC6yhDCM5rinyJJ-xGI30" alt="#" style={{width: 50, height: 50,}} />
      </IconButton>
      </Grid>
      <BottomNavigationAction style={{color: 'red'}} label="YouTube" value="YouTube" icon={<YouTubeIcon />} />
      <BottomNavigationAction style={{color: 'pink'}} label="Instagram" value="Instagram" icon={<InstagramIcon />} />
      <BottomNavigationAction style={{color: 'blue'}} label="Twitter" value="Twitter" icon={<TwitterIcon />} />
      <BottomNavigationAction style={{color: 'blue'}} label="Telegram" value="Telegram" icon={<TelegramIcon />} />
      <BottomNavigationAction style={{color: 'white'}} label="Log in" value="Log in" icon={<ExitToAppIcon />} />
    </BottomNavigation>
  );
}
