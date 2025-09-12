import { Box, List, ListItemButton, TextField, Typography, type TextFieldProps } from "@mui/material"
import { useState } from "react";
import { useController, type FieldValues, type UseControllerProps } from "react-hook-form"

type Props<T extends FieldValues> = {
    label: string;
} & UseControllerProps<T> & TextFieldProps

export default function LocationInput<T extends FieldValues>(props: Props<T>){

    const {field, fieldState} = useController({...props});
    const [loading ] = useState(false);
    const [suggestions ] = useState<string[]>([]);   
    

  return (
    <Box>
        <TextField 
          {...props}
          {...field}
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
