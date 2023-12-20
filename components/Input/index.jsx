import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

const TextFieldSizes = ({ min, max, icon, name, label, id, defaultValue, variant, size, onChange, placeholder, fullWidth, type, required, sx , disabled }) => {
  return (
    <Box sx={sx||{pr:1,mb:2}}>
      <TextField
        disabled={disabled}
        required={required||false}
        type={type||"text"}
        fullWidth={fullWidth}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: icon&&( <InputAdornment position="start">
                                    {icon}
                                  </InputAdornment>
          ),
          inputProps: {
            min: min, // Añadir atributo 'min'
            max: max, // Añadir atributo 'max'
          },
        }}
        name={name}
        label={label}
        id={id}
        defaultValue={defaultValue}
        variant={variant}
        size={size}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

TextFieldSizes.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default TextFieldSizes;
