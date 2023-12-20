'use client';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../src/store/Slices/errorSlice';
import MuiAlert from '@mui/material/Alert';

const vertical    =   'bottom';
const horizontal  =   'right';
let severity      =   'info';

const LIMIT_TIMEOUT = process.env.REACT_APP_LIMIT_TIMEOUT || 5000;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar() {
  const dispatch          =   useDispatch();
  const errorMessage      =   useSelector((state) => state.error.message);
  
  const [open, setOpen]   =   React.useState(!!errorMessage);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {
          setOpen(false);
          // También puedes despejar el mensaje de error al cerrar el Snackbar
          // Descomenta la siguiente línea si deseas limpiar el mensaje de error al cerrar el Snackbar
          //dispatch(clearError());
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

      

  React.useEffect(() => {
    if (errorMessage) {
      console.log(errorMessage)
      severity  = errorMessage&&errorMessage.includes("Buenas noticias")?"success":errorMessage&&errorMessage.includes("Error")?"error":"info";
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
          
      }, (LIMIT_TIMEOUT * 3));
    }
  }, [errorMessage]);

  React.useEffect(() => {
    if (!open) {
      dispatch(clearError())      
    }    
  }, [open]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {errorMessage || ''}
        </Alert>
      </Snackbar>
    </div>
  );
}
