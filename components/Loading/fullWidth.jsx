import { Grid, Typography } from "@mui/material";
import { yellow } from '@mui/material/colors';
import LoopIcon from '@mui/icons-material/Loop';
const FullWidth=()=>{
    return  <Grid sx={{
                            height:"100vh",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            background:yellow[700],
                        }}>
                <Grid align="center">
                    <Grid>            
                        <LoopIcon className="spin" sx={{color:"black", fontSize:{xs:80,md:80},}}/>
                    </Grid>
                    <Grid>
                        <Typography component="h1" 
                                    variant="h3" 
                                    className="montserrat"
                                    sx={{
                                            color:"black !important", 
                                            lineHeight:0.8,
                                            fontSize:{xs:22,sm:20,md:18,lg:16}
                                        }}
                        >
                            Cargando...
                        </Typography> 
                    </Grid>
                </Grid>               
            </Grid>
}
export default FullWidth;