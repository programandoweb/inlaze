import  React       from    'react';
import  Grid        from    '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';

const   Container   =     React.forwardRef((props, ref) => {
    return  <React.Fragment>
                <ThemeProvider theme={theme}>
                    <Grid className="auth-content">
                        {props.children}                        
                    </Grid>                    
                </ThemeProvider>
            </React.Fragment>
});


export default Container