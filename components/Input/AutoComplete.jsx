'use client'
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags({label, name, dataset, defaultValue, onChange, disabled}) {
  const handleAutocompleteChange = (event, newValue) => {
    if (onChange) {
      onChange((prev)=>({...prev,[name]:newValue}))      
    }
  };
  return (
    <Stack spacing={3} sx={{ width: "98%" }}>
      <Autocomplete
        disabled={disabled}
        multiple
        id={name}
        options={dataset||[]}
        getOptionLabel={(option) => option.name}
        value={defaultValue||[]}
        filterSelectedOptions
        onChange={handleAutocompleteChange}
        renderInput={(params) => (<TextField {...params} placeholder={label}/>)}
      />            
    </Stack>
  );
}