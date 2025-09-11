import { CloudUpload } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function PhotoUploadWidget() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Grid container spacing={3}>
      <Grid size={4}>
        <Typography variant="overline" color="secondary">
          {" "}
          Step 1 - add photo
        </Typography>
        <Box {...getRootProps()}
        sx={{
            border: 'dashed 3px #eee',
            borderColor: isDragActive ? 'green': '#eee',
            borderRadius: '5px',
            paddingTop: '30px',
            textAlign: 'center',
            height: '280px'
        }}
        >

          <input {...getInputProps()} />
          <CloudUpload sx={{fontSize: 80}} /> 
          <Typography variant="h5">Drop image here</Typography>
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </Box>
      </Grid>
      <Grid size={4}>
        <Typography variant="overline" color="secondary">
          {" "}
          Step 1 - resize photo
        </Typography>
      </Grid>
      <Grid size={4}>
        <Typography variant="overline" color="secondary">
          {" "}
          Step 1 - preview & upload photo
        </Typography>
      </Grid>
    </Grid>
  );
}
