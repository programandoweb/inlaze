import  React       from    'react';
import  Grid        from    '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const   Containers   =     React.forwardRef((props, ref) => {
    return  <React.Fragment>
                <ThemeProvider theme={theme}>
                    <Grid ref={ref} container justifyContent={"center"}>                     
                        <Grid item xs={12} sx={{p:props.fullWidth?0:2}}>
                            <CssBaseline />
                            {props.children}
                        </Grid>
                    </Grid>                    
                </ThemeProvider>
            </React.Fragment>
});


export default Containers