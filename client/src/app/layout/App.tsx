import { useEffect, useState } from "react"; 
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import axios from 'axios';
import NavBar from './NavBar';
import { Box, Container } from "@mui/material";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";


 function App() {
  const title = 'Welcome to Reactivities';
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => { 

      //Fetch data from 'https://localhost.com' using axios
      axios.get<Activity[]>('https://localhost:5145/api/activities')
        .then(response => setActivities(response.data))
        .catch(error => console.error('Error fetching activities:', error));

      return () => { }
  }, []);

  return ( 
    <Box sx={{bgcolor:'#eeeeee'}}>
    <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{mt: 3}}>
        <ActivityDashboard activities={activities}/>
      </Container>
       
    </Box>   
  )
}

export default App
