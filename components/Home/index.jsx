import { Button } from "@mui/material";
import ModelOne from "../../Theme/ModelOne"; 
import Logo from "../Logo";
import Link from 'next/link';
const Home  =   ()  => {
    return  <ModelOne>
                <Logo/>
                <Button component={Link} href="/auth/login" variant="contained" size="long" color="secondary" sx={{mt:4}}>
                    Puede iniciar haciendo click Aquí
                </Button>
            </ModelOne>        
                
}
export default Home;