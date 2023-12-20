'use client';
import { Grid } from "@mui/material";
import Container from "../../../../../Theme/Lists";
import Header from "../../../../../components/Header";
import Table from "./Table";

const List=()=>{

    const handleEvent=()=>{

    }

    return  <Container>
                <Header title={"Módulo Diccionarios"}
                        subtitle={"Gestiona de forma sencilla la traducción del website"}
                        btn={{
                            label:"Agregar",
                            event:handleEvent,
                        }}
                />
                <Grid sx={{mt:{xs:2,md:5}}}>
                    <Table/>
                </Grid>                
            </Container>
}
export default List;