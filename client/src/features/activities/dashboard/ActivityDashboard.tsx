import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";

type Props = {
 activities: Activity[]
}

function ActivityDashboard({ activities }: Props) {
  return (
    <Grid container>
      <Grid size={9}> 
        <ActivityList activities={ activities } />
      </Grid>
    </Grid>
  );
}

export default ActivityDashboard;
