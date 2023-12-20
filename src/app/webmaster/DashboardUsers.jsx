import { useEffect, useState } from 'react';
import Container from '../../../Theme/Container';
import MuroForm from '../../../components/Muro/Form';
import Messages from '../../../components/Muro/Messages';
import useFormData from "@/hooks/useFormData";
const { Grid } = require("@mui/material")
let getInit
const DashboardUsers=()=>{

    const [dataset,setDataset]=useState([]);

    const   {
                simpleGet,
                simplePost,
                simpleDelete,
                backend
            }   =   useFormData(false,false);
    const handleSendMessage = (message) => {
        try {
            simplePost(backend+"/comments",{message:message}).then((response)=>{
                getInit()        
            })   
        } catch (error) {
            console.log(error)
        }
    };

    getInit=()=>{
        simpleGet(backend+"/comments",{}).then((response)=>{
            setDataset(response);
        }) 
    }

    useEffect(()=>{
        getInit()        
    },[])

    const handleDelete=(row)=>{
        simpleDelete(backend+"/comments/"+row.id,{}).then((response)=>{
            setDataset(response);
        })         
    }

    return  <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <MuroForm onSendMessage={handleSendMessage}/>
                    </Grid> 
                    <Grid item xs={12}>
                        {
                            dataset&&dataset.length>0&&(
                                <Messages handleDelete={handleDelete} messages={dataset} />
                            )                                
                        }
                    </Grid>                            
                </Grid>    
            </Container>
}
export default DashboardUsers;