import { Grid } from "@mui/material";
import Input from '../../../../../../components/Input';
import UploadWithState from '../../../../../../components/Button/UploadWithState';

const Form=({formData, onChange})=>{
    
    return      <Grid container>
                    <Grid item xs={12} md={3}>
                        <Input  fullWidth 
                                defaultValue={formData.name}
                                name="name" 
                                type="text" 
                                label="Nombres"
                                onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input  fullWidth 
                                defaultValue={formData.surname}
                                name="surname" 
                                type="text" 
                                label="Apellidos"
                                onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Input  fullWidth 
                            defaultValue={formData.email}
                            name="email" 
                            type="email" 
                            label="Correo electrónico"
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input  fullWidth 
                            defaultValue={formData.celular}
                            name="celular" 
                            type="text" 
                            label="celular"
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input  fullWidth 
                            defaultValue={formData.register_code}
                            name="register_code" 
                            type="text" 
                            label="Código de registro"
                            onChange={onChange}
                        />
                    </Grid>              
                    <Grid item xs={12} md={3}>
                        <Input  fullWidth 
                            defaultValue={formData.razon_social}
                            name="razon_social" 
                            type="text" 
                            label="Razón Social"
                            onChange={onChange}
                        />
                    </Grid>              
                    <Grid item xs={12} md={3}>
                        <Input  fullWidth 
                            defaultValue={formData.nit}
                            name="nit" 
                            type="text" 
                            label="NIT"
                            onChange={onChange}
                        />
                    </Grid>            
                    {
                        formData&&formData.id&&(
                            <Grid item xs={12} md={"auto"}>
                                <UploadWithState size="large" sx={{mr:1}} label="RUT" name="rut" defaultValue={formData.rut}/>
                                <UploadWithState size="large" sx={{mr:1}} label="Cédula" name="cedula"  defaultValue={formData.cedula}/>
                                <UploadWithState size="large" sx={{mr:1}} label="Cámara de Comercio" name="camara_comercio"  defaultValue={formData.camara_comercio}/>                        
                            </Grid>
                        )
                    }                      
                   
                </Grid>
            
}
export default Form;