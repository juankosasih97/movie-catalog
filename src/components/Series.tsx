import MovieListing from "./shared/MovieListing";
import { Box } from "@material-ui/core";
import { connect } from 'react-redux';
import listing from '../interfaces/listing';
import movie from '../interfaces/movie';

interface props {
  listingArray: movie[]
}

function Series(props: props) {
  return (
    <>
      <header className="App-header">
        Popular Series
      </header>
      <Box p={2}>
        <MovieListing listingArray={props.listingArray}/>
      </Box>
    </>
  )
}

const mapStateToProps = (state: any) => {
  let seriesList = state.listing
    .filter((entry: listing) => entry.programType === 'series')
    .map((entry: listing) => {
      return {
        title: entry.title,
        image: entry.images['Poster Art'].url,
        description: entry.description,
        releaseYear: entry.releaseYear
      };
    });
  return {
    listingArray: seriesList
  }
}

export default connect(mapStateToProps)(Series);