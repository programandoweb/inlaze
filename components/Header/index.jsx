'use client';
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { setInputs } from '../../src/store/Slices/formInputsSlice';
import { usePathname, useParams } from 'next/navigation';


const Header=({title, subtitle, btn})=>{
    const pathname      =   usePathname();
    const params        =   useParams();
    const dispatch      =   useDispatch();
    
    const params2       =   (btn&&btn.type)?{
                                type:btn.type
                            }:false
    
    const   handleSave=()=>{
        dispatch(setInputs({pathname:pathname,params:params2||params}));
    }

    return  <Grid>
                {
                    
                        <Grid container>
                            <Grid item xs={12} md={8} align="left">
                                {
                                    title&&(
                                        <Grid>
                                            <Typography variant="h5" color={"primary"}><b>{title}</b></Typography>
                                        </Grid>
                                    )
                                }

                                {
                                    subtitle&&(
                                        <Grid>
                                            <Typography variant="h6" color={"secondary"}>{subtitle}</Typography>
                                        </Grid>
                                    )
                                }

                            </Grid>
                            {
                                btn&&btn.event&&(
                                    <Grid item xs={12} md={4} sx={{textAlign:{md:"right", xs:"left"}}}>
                                        <Button onClick={btn.event} variant="contained" startIcon={<AddCircleOutlineIcon />}  >
                                            {btn.label}
                                        </Button>
                                    </Grid>
                                )
                            } 
                            {
                                btn&&btn.href&&(
                                    <Grid item xs={12} md={4} sx={{textAlign:{md:"right", xs:"left"}}}>
                                        <Button onClick={handleSave} component={Link} href={btn.href} variant="contained" startIcon={<AddCircleOutlineIcon />} >
                                            {btn.label}
                                        </Button>
                                    </Grid>
                                )
                            } 
                            
                        </Grid>
                    
                }
                
            </Grid>
}

export default Header;