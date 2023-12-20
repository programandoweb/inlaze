import  React       from    'react';
import  Grid        from    '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';

const   Container   =     React.forwardRef((props, ref) => {
    return  <React.Fragment>
                <ThemeProvider theme={theme}>
                    <Grid variant="homeMain" className="home-content">
                        <Grid className="home-center">
                            {props.children}
                        </Grid>                 
                    </Grid>                    
                </ThemeProvider>
            </React.Fragment>
});


export default Container