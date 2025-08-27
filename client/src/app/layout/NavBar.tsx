import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Add NavBar component
export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Reactivities
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Activities</Button>
        <Button color="inherit">Create</Button>
      </Toolbar>
    </AppBar>
  );
}
