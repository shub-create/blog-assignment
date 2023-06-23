import React,{useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarCustom = ({state,handleClose,message,severity}) => {

   
   const vertical = "top";
   const horizontal = "right"

  return (
    <Snackbar
            autoHideDuration={1500}
            anchorOrigin={{ vertical  , horizontal }}
            open={state}
            onClose={handleClose}
            key={vertical + horizontal}
            sx={{
                 marginTop: "50px"
         }} >

        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
        </Alert>
    </Snackbar>
  )
}

export default SnackbarCustom