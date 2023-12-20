import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import {Grid,Box} from '@mui/material';

const intervalo = 250;

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const timeLoading                     =   2000;

export default function LinearWithValueLabel({percent,getInit,setSend,increment}) {

  if (!increment) {
    increment=timeLoading
  }
  
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (percent||percent===0) {
      setProgress(percent)
      return
    }

    const pasos   =   increment / intervalo;

    const timer = setInterval(() => {
      
      if ((progress/100) >= 1) {
        clearInterval(timer);        
      } 
      
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress +=(100/pasos)));

    }, intervalo);

    return () => {
      clearInterval(timer);
    };

  }, [percent,increment]);

  React.useEffect(() => {
    if (setSend&&progress===100) {
      setSend(true)
    }
  },[progress,setSend])

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12}>
        <Box sx={{ width: '100%' }}>
          <Grid>
            Buscando información...
          </Grid>
          <LinearProgressWithLabel value={progress} />
        </Box>
      </Grid>    
    </Grid>
  );
}
