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
  const [editMode, setEditMode] = useState(false);

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

  const handleOpenForm = (id?: string) =>{
     if(id) handleSelectActivity(id);
     else handleCancelSelectActivity();

     setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (activity: Activity) => {
    if(activity.id){
      setActivities(activities.map(x => x.id == activity.id ? activity : x))
    }
    else{
      const newActivity = {...activity, id: activities.length.toString()};
      setSelectedActivity(newActivity);
      setActivities([...activities, newActivity]);
    }

    setEditMode(false);

  }

  const handleDelete =  (id: string) => {
    setActivities(activities.filter(x => x.id != id));
  }

  return ( 
    <Box sx={{bgcolor:'#eeeeee'}}>
    <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{mt: 3}}>
        <ActivityDashboard 
        activities={activities}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
        selectedActivity={selectedActivity}
        editMode={editMode}
        openForm={handleOpenForm}
        closeForm={handleFormClose}
        submitForm={handleSubmitForm}
        deleteActivity={handleDelete}
        />
      </Container>
       
    </Box>   
  )
}

export default App
