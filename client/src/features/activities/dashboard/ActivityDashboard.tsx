import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";  

function ActivityDashboard( ) {

  
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList />
      </Grid>
      <Grid size={5}>
         Activity filters here
      </Grid>
    </Grid>
  );
}

export default ActivityDashboard;
