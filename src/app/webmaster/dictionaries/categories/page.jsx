'use client';
import { Grid } from "@mui/material";
import Header from "../../../../../components/Header/SubHeader";
import Table from "../../../../../components/Table/DiccionariesCategory";
const Dashboard=()=>{
    return  <Grid>
                <Header title={"Módulo Categorías del Diccionario"} subtitle={"Creación de idiomas para el sitio Web"} />
                <Grid sx={{mt:{xs:2,md:5}}}>
                    <Table/>
                </Grid>
            </Grid>
}
export default Dashboard;