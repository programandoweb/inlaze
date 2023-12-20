import { Grid } from "@mui/material";
import Input from '../../../../../../components/Input';

const Form=({formData, onChange})=>{

    let sub   =   {}
    if (formData.translations) {
        sub =   JSON.parse(formData.translations);    
    }

    console.log(formData)

    return      <Grid container>
                    <Grid item xs={12}>
                        <Input  fullWidth 
                                defaultValue={formData.label}
                                name="label" 
                                type="text" 
                                label="Label"
                                onChange={onChange}
                        />
                    </Grid>          
                </Grid>
            
}
export default Form;