'use client';
import { Grid } from "@mui/material";
import Header from "../../../../components/Header/SubHeader";
import Table from "../../../../components/Table/Roles";
const Dashboard=()=>{
    return  <Grid>
                <Header title={"Módulo de usuarios"} subtitle={"Selecciona el tipo de usuario a consultar por roles"} />
                <Grid sx={{mt:{xs:2,md:5}}}>
                    <Table/>
                </Grid>
            </Grid>
}
export default Dashboard;