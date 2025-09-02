import CssBaseline from "@mui/material/CssBaseline"; 
import NavBar from "./NavBar";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";

function App() {   

  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: '100vh'  }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
