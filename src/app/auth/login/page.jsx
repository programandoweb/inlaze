'use client';
import { Button, Grid, Typography } from "@mui/material";
import Container from "../../../../Theme/Container";
import ModelTwo from "../../../../Theme/ModelTwo"; 
import CustomLogin from '../../../../components/Input/CustomLogin';
import CustomPassword from '../../../../components/Input/CustomPassword';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PasswordIcon from '@mui/icons-material/Password';
import useFormData from "@/hooks/useFormData";
import useAsyncStorage from "@/hooks/useAsyncStorage";
import { useRouter } from 'next/navigation';
import logo1 from '../../../../assets/png/logo1.png';
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { setSession } from '@/store/Slices/userSlice';
import { organizeData } from '@/utils/fuctions';

const Login=()=>{

    const   dispatch    =   useDispatch();
    const   storage     =   useAsyncStorage("user");
    const   config      =   useAsyncStorage("config");
    const   properties  =   useAsyncStorage("properties_amenities");
    const   router      =   useRouter();

    const   {
                onChange,
                handleSubmit
            }   =   useFormData(false,true);
    
    const   onSubmit=(e)=>{
        e.preventDefault();
        
        try {
            handleSubmit(e).then((response)=>{

                if (response&&response.token) {
                    dispatch(setSession(response));
                    storage.setData(response);                    
                    config.setData(organizeData(response));                                        
                    properties.setData(response.properties_amenities);                                        

                    if (    response&&
                            response.user&&
                            response.mode) {
                        return router.replace(`/webmaster`);                                         
                    }else{
                        router.replace(`/auth/login`)
                    }
                }                
            })   
        } catch (error) {
            console.log(error)
        }

              
    }

    

    return  <Container fullWidth={true}>
                <ModelTwo>
                    <Grid container>                        
                        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' },
                                                        justifyContent:"center",
                                                        alignItems:" center"
                                                    }}>
                            <Grid align="center">
                                <Typography maxWidth={"90%"} className="white" variant="h6">
                                    Desarrollador Jorge Méndez para INLAZE
                                </Typography>                                     
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} className="sideRight flexCenter">
                            <Grid component={"form"} width={"80%"} onSubmit={onSubmit}>
                                <Grid align="center" sx={{mb:5}}>
                                    <Image
                                        alt="Programandoweb"
                                        src={logo1}
                                        width="280"
                                        height="auto"                                        
                                    />
                                </Grid>
                                <Grid align="center">
                                    <CustomLogin    sx={{mb:2}} 
                                                    required={true}
                                                    fullWidth 
                                                    name="email" 
                                                    type="text" 
                                                    label="Correo electrónico"
                                                    onChange={onChange}
                                    />
                                    <CustomPassword sx={{mb:2}} 
                                                    required={true}
                                                    fullWidth 
                                                    name="password" 
                                                    type="text" 
                                                    label="Contraseña"
                                                    onChange={onChange}
                                    />
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={6}>
                                            <Button type="submit" fullWidth variant="contained" startIcon={<LoginIcon />}>Iniciar Sesión</Button>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Button fullWidth variant="outlined" startIcon={<VpnKeyIcon />}>Registrarme</Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button fullWidth variant="contained" color="secondary" startIcon={<PasswordIcon />}>Recuperar Contraseña</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ModelTwo>
            </Container>
}
export default Login;