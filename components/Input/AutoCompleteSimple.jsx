'use client'
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function AutoCompleteSimple({label, name, dataset, defaultValue, onChange, index}) {
  const handleAutocompleteChange = (event, newValue) => {
    
    if (onChange) {
      onChange((prev)=>({...prev,[name]:newValue&&newValue[index||"name"]}))      
    }
  };
  return (
    <Stack spacing={3} sx={{ width: "98%" }}>
      <Autocomplete                                  
        id={name}
        options={dataset||[]}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        onChange={handleAutocompleteChange}
        renderInput={(params) => (<TextField {...params} placeholder={label}/>)}
      />      
    </Stack>
  );
}