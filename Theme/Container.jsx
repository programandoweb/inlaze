import  React       from    'react';
import  Grid        from    '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Loading from '../components/Loading/LinearWithLabel';

const   Containers   =     React.forwardRef((props, ref) => {
    return  <React.Fragment>
                    <Grid ref={ref} container justifyContent={"center"}>                     
                        <Grid item xs={12} sx={{p:props.fullWidth?0:2}}>
                            <CssBaseline />
                            {
                                props.loading&&(
                                    <Loading/>
                                )
                            }
                            {
                                !props.loading&&(
                                    props.children
                                )
                            }                            
                        </Grid>
                    </Grid>                    
                
            </React.Fragment>
});


export default Containers