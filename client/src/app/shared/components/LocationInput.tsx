import { Box, debounce, List, ListItem, ListItemButton, TextField, Typography, type TextFieldProps } from "@mui/material"
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useController, type FieldValues, type UseControllerProps } from "react-hook-form"
import type { LocationIQ } from "../../../lib/types";

type Props<T extends FieldValues> = {
    label: string;
} & UseControllerProps<T> & TextFieldProps

export default function LocationInput<T extends FieldValues>(props: Props<T>){

    const {field, fieldState} = useController({...props});
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState<LocationIQ[]>([]);
    const [inputValue, setInputValue] = useState(field.value || '');

    useEffect(() => {
      if(field.value && typeof field.value === 'object'){
        setInputValue(field.value.venue || '');
      }
      else{
        setInputValue(field.value.venue || '');
      }
    }, [field.value])
    
    const locationUrl = 'https://us1.locationiq.com/v1/reverse?key=pk.871a409f4cfa5a9c8a6e12cdc250bdfc&lat=51.50344025&lon=-0.12770820958562096&format=json&';
    
    const fetchSuggestions = useMemo(
      () => debounce( async (query: string) =>{
             if(!query || query.length < 3){
              setSuggestions([]);
              return;
             }

             setLoading(true);

             try {
                 const resp = await axios.get<LocationIQ[]>(`${locationUrl}q=${query}`);
                 setSuggestions(resp.data);
             } catch (error) {
                console.log(error);
             }finally{
              setLoading(false);
  
             }
      }, 500), [locationUrl]
    );

    const handleChange = async (value: string) => {
      field.onChange(value);
      await fetchSuggestions(value);
    }

    const handleSelect = (location: LocationIQ) => {
     
      
    }

  return (
    <Box>
        <TextField 
          {...props}
          value={inputValue}
          onChange={e => handleChange(e.target.value)}
          fullWidth
          variant="outlined"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        /> 
        {loading && <Typography>Loading ... </Typography>}
        {suggestions.length > 0 && (
          <List sx={{border: 1}}>
            {suggestions.map((suggestion) => (
              <ListItemButton divider key={suggestion} onClick={()=>{}}>
                {suggestion}
              </ListItemButton>
            ))}
          </List>
        )}

    </Box>
  )
}
