import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/AccountBalance';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontSize: 30,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 70,
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button}>
        Riwayat Periksa
        <DeleteIcon className={classes.rightIcon} />
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Biaya Inap
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      <Button variant="contained" color="default" className={classes.button}>
       Kartu Pasien
       
        <CloudUploadIcon className={classes.account_balance} />
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        <KeyboardVoiceIcon className={classes.leftIcon} />
        Info Bed
      </Button>
      <Button variant="contained" size="small" className={classes.button}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Info Antrian 
      </Button>
    </div>
  );
}