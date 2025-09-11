import { Grid, Typography } from "@mui/material";

export default function PhotoUploadWidget() {
  return (
    <Grid container spacing={3}>
      <Grid size={4}>
        <Typography variant="overline" color="secondary"> Step 1 - add photo</Typography>
      </Grid>
      <Grid size={4}>
        <Typography variant="overline" color="secondary"> Step 1 - resize photo</Typography>
      </Grid>
      <Grid size={4}>
        <Typography variant="overline" color="secondary"> Step 1 - preview & upload photo</Typography>
      </Grid>
    </Grid>
  );
}
