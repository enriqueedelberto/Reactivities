import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";  
import ActivityFilters from "./ActivityFilters";

function ActivityDashboard( ) {

  
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList />
      </Grid>
      <Grid size={4}>
         <ActivityFilters />
      </Grid>
    </Grid>
  );
}

export default ActivityDashboard;
