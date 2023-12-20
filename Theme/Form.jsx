import  React       from    'react';
import  Grid        from    '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const   Containers   =     React.forwardRef((props, ref) => {
    return  <React.Fragment>
                <ThemeProvider theme={theme}>
                    <Grid ref={ref} variant="form">                     
                        {props.children}                        
                    </Grid>                    
                </ThemeProvider>
            </React.Fragment>
});


export default Containers