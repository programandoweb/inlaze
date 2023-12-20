import { Grid } from "@mui/material";
import Logo from "./index";
import {theme} from '../../Theme/theme';

const Round=()=>{
    console.log(50000)
    return  <Grid sx={{ 
                            width:100,
                            height:100, 
                            borderRadius:50, 
                            p:5,
                           
                        }}>
                <Logo/>
            </Grid>
}
export default Round;