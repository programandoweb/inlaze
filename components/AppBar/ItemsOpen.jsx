'use client'
import { Button, Grid } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

const ItemsOpen=({rows,state,setState})=>{

    const [menu,setMenu]    =   useState([])

    const user      =   useSelector((state) => state.user.session);

    //console.log(user.permissions)
    
    const handleClick=()=>{
        setState(false)
    }

    useEffect(()=>{
        if (user&&user.permissions) {
            let permissions_    =   [];
            
            rows.map((row)=>{
                const result    =   user.permissions.find(search=>search.name===row.permissions);
                if (result) {
                    return permissions_.push(row);    
                }
                //console.log(row.permissions,user.permissions)  
                return;
            })                
            
            setMenu(permissions_);    
        }
        
    },[user])

    return  <Grid>
                {
                    menu&&menu.length>0&&(
                        menu.map((row, key)=>{
                            return  <Grid key={key} sx={{mt:0, }} align="left">
                                        <Button onClick={handleClick} component={Link} href={row.href} 
                                                variant="link" 
                                                fullWidth 
                                                sx={{
                                                    justifyContent:"start",
                                                    color:"white !important",
                                                    pl:1.1,
                                                    minWidth:30,

                                                    m:0,
                                                }}>
                                            {row.icon} 
                                            <Grid component={"span"} sx={{display:state?"flex":"none", ml:1, color:"white" , fontSize:13}}> 
                                                {row.name}
                                            </Grid>
                                        </Button>                                            
                                    </Grid>
                        })
                    )
                }
            </Grid>
}

export default ItemsOpen