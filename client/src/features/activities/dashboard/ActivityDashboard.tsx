import { Button, Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityFilters from "./ActivityFilters";
import { useActivities } from "../../../lib/hooks/useActivities";

function ActivityDashboard() {
  const { isFetchingNextPage, fetchNextPage, hasNextPage } = useActivities();

  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList />
        <Button
          onClick={() => fetchNextPage()}
          sx={{ my: 2, float: "right" }}
          variant="contained"
          disabled={!hasNextPage || isFetchingNextPage}
        >
          Load more...
        </Button>
      </Grid>
      <Grid 
      size={4}
      sx={{
        position: 'sticky',
        top: 112,
        alignSelf: 'flex-start'
      }}
      
      >
        
        <ActivityFilters />
      </Grid>
    </Grid>
  );
}

export default ActivityDashboard;
