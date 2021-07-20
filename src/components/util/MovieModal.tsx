import { connect } from 'react-redux';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Box } from "@material-ui/core";
import React from 'react';
import axios from "axios";
import { openError } from '../../actions/errorPopUpActions';
import { closeModal } from '../../actions/movieModalActions';

interface props {
  image: string;
  title: string;
  description: string;
  releaseYear: number;
  open: boolean;
  closeModal: any;
  showError: any;
}

interface state {
  trivia: string;
}

class MovieModal extends React.Component<props, state> {
  
  constructor(props: props) {
    super(props);
    this.state ={
      trivia: ""
    };
  }

  handleClose = () => {
    this.props.closeModal();
  }

  componentDidUpdate(prevProps: props) {
    if(prevProps.open === false){
      console.log('getting trivia');
      this.getTrivia();
    }
  }
  
  async getTrivia() {
    try {
      let res = await axios.get(`http://numbersapi.com/${this.props.releaseYear}/year`);
      this.setState({
        trivia: res.data
      })
    }
    catch(error: any) {
      console.log(error);
      this.props.showError("Unable to retrieve trivia.");
    };
  };

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.handleClose}>
        <DialogTitle>
          {this.props.title}
        </DialogTitle>
        <DialogContent>
          <Box p={2}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <img src={this.props.image} alt={this.props.title} style={{maxWidth: "100%", maxHeight: "100%"}}></img>
              </Grid>
              <Grid item xs={6}>
                <DialogContentText>
                  {this.props.description}
                  <br/>
                  <br/>
                  Release year: {this.props.releaseYear}
                  <br/>
                  <br/>
                  {this.state.trivia}
                </DialogContentText>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    image: state.modalImage,
    title: state.modalTitle,
    description: state.modalDescription,
    releaseYear: state.modalReleaseYear,
    open: state.isModalOpen
  }
}

const mapDispatchToProps = {
  closeModal: closeModal,
  showError: (errorMessage: string) => openError(errorMessage)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);