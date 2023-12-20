'use client'
import Container from "../../../../../../Theme/Open";
import Form from "../../../../../../Theme/Form";
import useFormData from "@/hooks/useFormData";
import Header from "../../../../../../components/Header";
import BtnBack from "../../../../../../components/Button/Back";
import FormContent from "./FormContent";
import { Grid } from "@mui/material";

const Dashboard=()=>{

    const {formData, onChange, loading, handleSubmit}   =   useFormData(false,true);  
    
    return  (
        <Container>
            <Grid component={"form"} onSubmit={handleSubmit}>
                <BtnBack    component={<Header loading={loading}  
                            title={"Módulo de usuarios"} 
                            subtitle={(formData&&formData.name&&(formData.name + " " + formData.surname)) || "usuario"} />}
                            save={true}
                />
                <Form>
                    <FormContent onChange={onChange} formData={formData} onSubmit={handleSubmit}/>                
                </Form>
            </Grid>
        </Container>
    )
}
export default Dashboard;