'use client';
import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux';
import { Box, Chip } from '@mui/material';


export default function InputAdornments({ 
                                            name, 
                                            label, 
                                            id, 
                                            defaultValue, 
                                            variant, 
                                            size, 
                                            onChange, 
                                            placeholder, 
                                            fullWidth, 
                                            type, 
                                            required ,
                                            sx
                                        }) {

    const errorMessage  =   useSelector((state) => state.errorInputs.inputErrors);
    
    

    return (
                <FormControl fullWidth sx={sx}>
                    <InputLabel htmlFor={id||name}>
                        {placeholder||label}
                    </InputLabel>
                    <OutlinedInput
                        error={errorMessage[name]}
                        required={required||false}
                        type={type||"text"}
                        fullWidth={fullWidth}
                        inputlabelprops={{
                        shrink: true,
                        }}
                        name={name}
                        label={label}
                        id={id||name}
                        defaultValue={defaultValue}
                        variant={variant}
                        size={size}
                        onChange={onChange}                
                        startAdornment={<InputAdornment position="start"><AccountCircleIcon/></InputAdornment>}
                    />
                    {
                       errorMessage[name]&&errorMessage[name].length>0&&(
                        <Box sx={{m:1}}  align="left">
                            {
                                errorMessage[name].map((row,key)=>{
                                    return <Chip color="primary" key={key} label={row} />
                                })   
                            }                           
                            
                        </Box>
                       ) 
                    }
                    
                </FormControl>    
  );
}