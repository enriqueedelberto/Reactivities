import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography"; 
import { Box, Button, Container, MenuItem } from "@mui/material"; 
import { Group } from "@mui/icons-material";

type Props = {
   openForm: () => void;
};

// Add NavBar component
export default function NavBar({openForm} : Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: "linear-gradient(135deg, #182a73 69%, #20a7ac 90%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
             <Box>
                <MenuItem sx={{ display: "flex", gap:2 }}>
                    <Group fontSize="large" />
                    <Typography variant="h4" fontWeight='bold'>Reactivites</Typography>
                </MenuItem>
             </Box>
             <Box sx={{display: 'flex'}}>
                 <MenuItem sx={{fontSize: '1.2rem', textTransform:'uppercase', fontWeight: 'bold'}}>
                 Activities
                 </MenuItem>
                 <MenuItem sx={{fontSize: '1.2rem', textTransform:'uppercase', fontWeight: 'bold'}}>
                 About
                 </MenuItem>
                 <MenuItem sx={{fontSize: '1.2rem', textTransform:'uppercase', fontWeight: 'bold'}}>
                 Contacts
                 </MenuItem>

             </Box>
             <Button size="large" variant="contained" color="warning" onClick={openForm}>Create activity</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
