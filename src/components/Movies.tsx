import MovieListing from "./shared/MovieListing";
import { Box } from "@material-ui/core";
import listing from "../interfaces/listing";
import movie from "../interfaces/movie";
import { connect } from 'react-redux';

interface props {
  listingArray: movie[]
}
function Movies(props: props) {
  return (
    <>
      <header className="App-header">
        Popular Movies
      </header>
      <Box p={2}>
        <MovieListing listingArray={props.listingArray}/>
      </Box>
    </>
  )
}

const mapStateToProps = (state: any) => {
  const movieList: movie[] = state.listing
    .filter((entry: listing) => entry.programType === 'movie')
    .map((entry: listing) => {
      return {
        title: entry.title,
        image: entry.images['Poster Art'].url,
        description: entry.description,
        releaseYear: entry.releaseYear
      };
    });
  return {
    listingArray: movieList
  }
}

export default connect(mapStateToProps)(Movies);