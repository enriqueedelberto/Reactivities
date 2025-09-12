import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import { Box, Container } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";

function App() {
  const location = useLocation();
  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container maxWidth="xl" sx={{ pt: 15 }}>
            <Outlet />
          </Container>
        </>
      )}
    </Box>
  );
}

export default App;
