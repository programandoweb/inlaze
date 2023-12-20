'use client'
import Link from "next/link";
import Container from "../../Theme/Container";
import { Button, Grid } from "@mui/material";
import useAsyncStorage from "@/hooks/useAsyncStorage";
import { useRouter } from 'next/navigation';

const Dashboard=()=>{

    const   storage     =   useAsyncStorage("user");
    const   router      =   useRouter();

    const handleClick=()=>{
        storage.removeData();
        router.replace(`/auth/login`)                
    }

    return  <Container>
                <Grid container spacing={1} justifyContent={"center"}>
                    <Grid item xs={12} align={"center"}>
                        Estás a punto de cerrar la sesión, 
                        <br/>¿Deseas salir del sistema? 
                        <br/>
                        <br/>
                        <Button variant="contained" sx={{mr:1}} onClick={handleClick}>
                            Si
                        </Button>
                        <Button variant="outlined" component={Link} href="/dashboard">
                            No
                        </Button>
                    </Grid>                
                </Grid>     
            </Container>
}
export default Dashboard;