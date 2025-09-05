import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, type SelectProps as SelectInputProps } from "@mui/material";

type Props<T extends FieldValues> = {
    items: { value: string; label: string }[];
    label: string;
} & UseControllerProps<T> & Partial<SelectInputProps>;

export default function SelectInput<T extends FieldValues>(props: Props<T>) {
   const {field, fieldState} = useController({...props});

  return (
     <FormControl fullWidth error={!!fieldState.error}>
       <InputLabel>{props.label}</InputLabel>
       <Select 
         value={field.value || ''}
         label={props.label} 
         onChange={field.onChange} 
         >
         {props.items.map(item => (
           <MenuItem key={item.value} value={item.value}>
             {item.label}
           </MenuItem>
         ))}
       </Select>
       <FormHelperText>{fieldState.error?.message}</FormHelperText> 
     </FormControl>
    
  )
}
