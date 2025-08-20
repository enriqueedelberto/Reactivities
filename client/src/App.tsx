import { useEffect, useState } from "react";
import {Typography} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import axios from 'axios';


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
    <>
      <Typography variant='h3' className="app" style={{color: 'red'}}>{title}</Typography> 
       <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>{activity.title}</ListItem>
        ))} 
       </List> 
    </>   
  )
}

export default App
