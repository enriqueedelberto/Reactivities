import { Group } from "@mui/icons-material";
import { Box, Button, Link, Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper
      sx={{
        colors: "white",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "linear-gradient(135deg, #182a73 69%, #20a7ac 90%)",
      }}
    >
      <Box
        sx={{
          colors: "white",
          display: "flex",
          gap: 3,
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Group sx={{ height: 110, width: 110 }} />
        <Typography variant="h1">Reactivities</Typography>
      </Box>

      <Typography variant="h2">Welcome to Reactivities</Typography>

      <Button 
         component={Link}
         to='/activities'
         size="large"
         variant="contained"
         sx={{height: 80, borderRadius: 4, fontSize: '1.5rem'}}
        >
          Take to the activities
      </Button>
    </Paper>
  );
}
