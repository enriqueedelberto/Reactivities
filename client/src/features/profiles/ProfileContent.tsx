import { Box, Paper, Tab, Tabs } from '@mui/material';
import {   useState } from 'react'
import * as React from 'react';
import ProfilePhotos from './ProfilePhotos';
import ProfileAbout from './ProfileAbout';

export default function ProfileContent() {
  const [value, setValue] = useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) =>{
    setValue(newValue);
  };

  const tabContent = [
    {label: 'about', content: <ProfileAbout />},
    {label: 'photos', content: <ProfilePhotos />},
    {label: 'events', content: <div>events</div>},
    {label: 'followers', content: <div>followers</div>},
    {label: 'following', content: <div>following</div>},
  ];

  return (
    <Box 
     component={Paper}
     mt={2}
     p={3}
     elevation={3}
     height={500}
     sx={{display: 'flex', alignItems: 'flex-start', borderRadius: 3}}
    >
      <Tabs  
        orientation='vertical' 
        variant='scrollable'
        value={value}
        onChange={handleChange}
         aria-label="Vertical tabs example"
        sx={{borderRight: 1, height: 450, minWidth: 200}}
      >
        {tabContent.map((tab, index)=>(
          <Tab key={index} label={tab.label} sx={{mr: 3}} />
        ))}
      </Tabs>
      <Box sx={{flexGrow: 1, p: 3, pt: 0}}>
        {tabContent[value].content }
      </Box>
      
    </Box>
  )
}
