import { Grid, Card, CardActionArea, CardContent, Typography, Box } from "@material-ui/core";
import { Link } from 'react-router-dom';

const homeList = [
    {
      title: 'Popular Series',
      url: '/series'
    },
    {
      title: 'Popular Movies',
      url: '/movies'
    }
  ];

export default function Home() {
  return (
    <>
      <header className="App-header">
        Popular titles
      </header>
      <Box p={2}>
        <Grid container spacing={2}>
          {homeList.map((movie, i) => {
            return (
              <Grid key={i} item xs={6} sm={2}>
                <Link to={movie.url}>
                  <Card>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {movie.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}