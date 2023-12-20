'use client'
import { Avatar, Box, Grid, Typography } from "@mui/material"
import { IconButton } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { yellow } from '@mui/material/colors';
import  useAsyncStorage from '../src/hooks/useAsyncStorage';


const Render=({state, toggleDrawer,components})=>{
    const store =   useAsyncStorage("user");
    return <>    
            <Box
                    sx={{
                        flexGrow: 1,
                        transition: 'padding-left 0.3s ease',
                    }}
            >
                <Grid sx={{ flexGrow: 1, py: 1, pl:{md:1, xs:2}, boxShadow:0.5, ml:2 }} variant="appbar">
                    <Grid container>
                        <Grid item xs={2} md={9}>
                            <IconButton  sx={{background:state?yellow[700]:yellow[700]}}   onClick={() => toggleDrawer()}>
                                {state ? <MenuOpenIcon sx={{color:"white !important"}} /> : <MenuIcon  sx={{color:"white !important"}} />}
                            </IconButton>
                        </Grid>
                        <Grid item xs={8} md={2.5} align="right">
                            <Typography sx={{pt:0.8,pr:2}}>
                                <b>
                                    {
                                        store.data&&
                                        store.data.user&&
                                        store.data.user.name?store.data.user.name+" "+store.data.user.surname:""
                                    }                                    
                                </b>
                            </Typography>                            
                        </Grid>
                        <Grid item xs={2} md={0.5} align="left">
                            <Avatar src={store.data&&
                                        store.data.user&&
                                        store.data.user.photo} sx={{mr:2}}/>                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{ height:"80vh", overflowY:"scroll", flex:1}} variant="dashboardMain">
                    {
                        components
                    }
                </Grid>
            </Box>
        </>
}

export default Render;