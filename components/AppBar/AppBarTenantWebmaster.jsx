import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from "next/image";
import ico from "../../assets/png/ico.png";
import logo from "../../assets/png/logo.png";
import ItemsOpen from './ItemsOpen';
import { routes_modules } from '../../src/app/webmaster/routes';


const drawerWidth   =   250;

export default function SwipeableTemporaryDrawer({state,setState}) {
    
    return (
    <React.Fragment>
        
      <Box
          sx={{
              width: state ? `${drawerWidth*1.5}px` : `${drawerWidth*0.4}px`,
              transition: 'width 0.3s ease, flex-grow 0.3s ease',
          }}
      >
            <Box sx={{minHeight:"100vh"}}>
                <Grid variant="menu">
                    <Grid variant="menuDinamic">
                        <Box sx={{height:30}}>
                            <Grid align="center">
                                {
                                    state&&(
                                        
                                            <Box    component={Image}
                                                    src={logo}
                                                    alt="Programandoweb"
                                                    sx={{   width:"auto", 
                                                            height:30,
                                                            transition: 'width 0.3s ease, flex-grow 0.3s ease',}}
                                            />
                                    )
                                }                            
                                {
                                    !state&&(
                                        <Box    component={Image}
                                                src={ico}  
                                                alt="Programandoweb"                                          
                                                sx={{   width:"auto", 
                                                        height:30,
                                                        transition: 'width 0.3s ease, flex-grow 0.3s ease',}}
                                        />
                                    )
                                }                            
                            </Grid>
                        </Box>
                        <Box sx={{mt:2}}>
                            <ItemsOpen state={state} setState={setState} rows={routes_modules}/>
                        </Box>
                    </Grid>
                </Grid>
          </Box>
      </Box>
    </React.Fragment>
  );
}
