'use client'

import Container from "../../../../Theme/Container";
import { IconButton , Grid , Card , Avatar , CardHeader , Typography} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from "next/link";
import {routes_modules} from './routes'
import useFormData from "@/hooks/useFormData";
import Header from "../../../../components/Header/SubHeader";

const Dashboard=()=>{

    const {formData}   =   useFormData(false,true);  

    return  <Container>
                <Header title={"Módulo Diccionarios"} subtitle={"Gestiona de forma sencilla la traducción del website"} />
                <Grid container spacing={1} justifyContent={"center"} sx={{mt:2}}>
                    {
                        routes_modules&&(
                            routes_modules.map((row,key)=>{
                                return  <Grid item xs={12} md={4} key={key}>
                                            <Card>
                                                <CardHeader
                                                    avatar={
                                                    <Avatar
                                                        alt="Programandoweb"
                                                        width={50}
                                                        height={50}
                                                    >
                                                      {row.icon}
                                                    </Avatar>
                                                    }
                                                    action={
                                                        <IconButton component={Link} href={row.href} aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    }
                                                    title={<Typography variant="title">{row.name}</Typography>}
                                                    subheader={<Typography variant="subheader">{formData&&formData[row.param]} disponibles </Typography>}
                                                />                                                                
                                            </Card>
                                        </Grid>                
                            })
                        )
                    }    
                </Grid>     
            </Container>
}
export default Dashboard;