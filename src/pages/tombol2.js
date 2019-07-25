import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
import KartuPasien from '@material-ui/icons/AccountBox';
import InfoSehat from '@material-ui/icons/Accessible';
import BiayaIcon from '@material-ui/icons/AddShoppingCart';
// import InfoKontrol from '@material-ui/icons/AccountBox';
// import AntrianPoli from '@material-ui/icons/NoteAdd';
// import JadwalPoli from '@material-ui/icons/CardGiftcard';
// import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 500,
    buttom:0
  },
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <BottomNavigationAction label="Info Biaya" icon={<BiayaIcon/>} onClick={()=>props.changePage("Home")} /> */}
      <BottomNavigationAction label="Info Biaya" icon={<BiayaIcon/>} onClick={()=>props.changePage("Biaya")}  />
      <BottomNavigationAction label="Kartu Pasien" icon={<KartuPasien />} onClick={()=>props.changePage("Kartu")} />
      <BottomNavigationAction label="Info Kesehatan" icon={<InfoSehat />} onClick={()=>props.changePage("Info")}/>

      {/* <BottomNavigationAction label="Info Konrol Rutin" icon={<InfoKontrol/>} />
      <BottomNavigationAction label="Antrian Poli" icon={<AntrianPoli />} />
      <BottomNavigationAction label="Jadwal Poli" icon={<JadwalPoli />} /> */}
    </BottomNavigation>
  );
}