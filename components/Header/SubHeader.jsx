'use client';
import { Button, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";


const Header=({title, subtitle})=>{
    return  <Grid>
                <Grid container justifyContent={"center"}>
                    <Grid item xs={12} md={6} align="center">
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
                                    <Typography variant="h6" >{subtitle}</Typography>
                                </Grid>
                            )
                        }

                    </Grid>                                       
                </Grid>
            </Grid>
}

export default Header;