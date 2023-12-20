import { Grid } from "@mui/material";
import Input from '../../../../../../components/Input';

const Form=({formData, onChange})=>{

    let sub   =   {}
    if (formData.translations) {
        sub =   JSON.parse(formData.translations);    
    }

    return      <Grid container>
                    <Grid item xs={12} md={1}>
                        <Input  fullWidth 
                                disabled
                                defaultValue={sub.lang}
                                name="lang" 
                                type="text" 
                                label="Lang"
                                onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input  fullWidth 
                                disabled
                                defaultValue={formData.key}
                                name="key" 
                                type="text" 
                                label="Key"
                                onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Input  fullWidth 
                                defaultValue={sub.label}
                                name="label" 
                                type="text" 
                                label="Label"
                                onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Input  fullWidth 
                                defaultValue={sub.className}
                                name="className" 
                                type="text" 
                                label="Clase"
                                onChange={onChange}
                        />
                    </Grid>                    
                                     
                </Grid>
            
}
export default Form;