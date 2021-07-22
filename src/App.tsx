import './App.css';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Button, ButtonGroup, Box, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Series from './components/Series';
import Movies from './components/Movies';
import MovieModal from './components/util/MovieModal';
import ErrorPopup from './components/util/ErrorPopup';


function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Grid
              justifyContent="space-between"
              container spacing={10}
            >
              <Grid item>
                <Typography component={Link} to={"/"} style={{textDecoration: "none"}} variant="h5" color="inherit">
                  DEMO Streaming
                </Typography>
              </Grid>
              <Grid item>
                <Button className="right" color="inherit">Login</Button>
                <Button className="right" color="inherit">Start your free trial</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
        <Footer />
      </div>
      <MovieModal />
      <ErrorPopup />
    </Router>
  );
}

function Footer() {
  return (
    <div>
      <Box bgcolor="#282c34" color="white">
        <ButtonGroup variant="text" color="inherit">
          <Button>Home</Button>
          <Button>Terms and Conditions</Button>
          <Button>Privacy Policy</Button>
          <Button>Collection Statement</Button>
          <Button>Help</Button>
          <Button>Manage Account</Button>
        </ButtonGroup>
        <Box textAlign="left" color="white"> 
          Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
        </Box>
      </Box>
    </div>
  );
}



export default App;
