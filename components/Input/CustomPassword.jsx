'use client';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
  
  const errorMessage = useSelector((state) => state.errorInputs.inputErrors);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
        <FormControl fullWidth sx={sx}>
          <InputLabel htmlFor="outlined-adornment-amount">
            {placeholder||label}
          </InputLabel>
          <OutlinedInput

            required={required||false}
            type={showPassword?"text":"password"}
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
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
          />
          {
              errorMessage[name]&&errorMessage[name].length>0&&(
              <Box sx={{m:1}} align="left">
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