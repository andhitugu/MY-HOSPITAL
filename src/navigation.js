import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme =>({
  root: {
    width: 500,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (

    <React.Fragment>
    <CssBaseline />
    <AppBar position="fixed" color="primary" className={classes.appBar}>

        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} component={Link} to ="/" />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} component={Link} to="/dataapi"/>
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
        </BottomNavigation>
        </AppBar>
    </React.Fragment>
  );

  
}