import { Grid } from "@material-ui/core";
import MovieCard from "./MovieCard";

interface Props {
  listingArray: {image: string, title: string, description: string, releaseYear: number}[];
}


export default function MovieListing( {listingArray} : Props ) {
  return (
    <Grid container spacing={2}>
      {listingArray.map((movie, i) => {
        return (
          <Grid key={i} item xs={6} sm={2}>
            <MovieCard {...movie} />
          </Grid>
        );
      })}
    </Grid>
  );
}