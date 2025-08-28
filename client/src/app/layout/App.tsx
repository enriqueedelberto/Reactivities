import { useEffect, useState } from "react"; 
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import NavBar from './NavBar';
import { Box, Container } from "@mui/material";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";


 function App() {
  const title = 'Welcome to Reactivities';
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>();

  useEffect(() => { 

      //Fetch data from 'https://localhost.com' using axios
      axios.get<Activity[]>('https://localhost:5145/api/activities')
        .then(response => setActivities(response.data))
        .catch(error => console.error('Error fetching activities:', error));

      return () => { }
  }, []);

  const handleSelectActivity = (id: string) =>{
     setSelectedActivity(activities.find(x => x.id == id));
  }

  const handleCancelSelectActivity = () =>{
     setSelectedActivity(undefined);
  }

  return ( 
    <Box sx={{bgcolor:'#eeeeee'}}>
    <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{mt: 3}}>
        <ActivityDashboard 
        activities={activities}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
        selectedActivity={selectedActivity}
        />
      </Container>
       
    </Box>   
  )
}

export default App
