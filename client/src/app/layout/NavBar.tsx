import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography"; 
import { Box, Container, MenuItem } from "@mui/material"; 
import { Group } from "@mui/icons-material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
 

// Add NavBar component
export default function NavBar( ) {
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
                <MenuItem component={NavLink} to='/' sx={{ display: "flex", gap:2 }}>
                    <Group fontSize="large" />
                    <Typography variant="h4" fontWeight='bold'>Reactivites</Typography>
                </MenuItem>
             </Box>
             <Box sx={{display: 'flex'}}>
                 <MenuItemLink  to='/activities'>
                 Activities
                 </MenuItemLink> 

                 <MenuItemLink to='/createActivity'>
                 Create activity
                 </MenuItemLink>  
             </Box>
             
             <MenuItem>
              user menu
             </MenuItem>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
