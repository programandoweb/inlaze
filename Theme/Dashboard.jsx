import  React       from    'react';
import  Box        from    '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '../components/AppBar';
import theme from './theme';
import DashboarRender from './DashboardRender';


const   Container   =     React.forwardRef((props, ref) => {
    
    const [state, setState] = React.useState(false);

    const toggleDrawer = (value) => {
        if (value !== undefined) {
        setState(value);
        } else {
        setState((prevState) => !prevState);
        }
    };

    return  <React.Fragment>
                <ThemeProvider theme={theme}>                    
                    <Box sx={{ display: {md:'flex',xs:"flex"}, flexDirection: 'row' }}>
                        <AppBar state={state} setState={setState} />
                        <DashboarRender state={state} toggleDrawer={toggleDrawer} components={props.children}/>
                    </Box>                     
                </ThemeProvider>
            </React.Fragment>
});


export default Container