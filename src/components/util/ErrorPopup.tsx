import { IconButton, Snackbar, createStyles } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { connect, useDispatch } from 'react-redux';
import { WithStyles, withStyles } from "@material-ui/styles";
import { closeError } from "../../actions/errorPopUpActions";

const styles = createStyles({
  snackBarError: {
    backgroundColor: "#f44336"
  }
}); 

interface Props extends WithStyles<typeof styles> {
  errorMessage: string;
  open: boolean;
}

function ErrorPopup (props: Props) {

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeError());
  };
  
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      ContentProps={{
        className: props.classes.snackBarError
      }}
      open={props.open} 
      autoHideDuration={5000} 
      onClose={handleClose}
      message={props.errorMessage}
      action={
        <IconButton size="small" color="inherit" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      
      }
    />
  );
}

const mapStateToProps = (state: any) => {
  return {
    errorMessage: state.errorMessage,
    open: state.isErrorOpen
  }
}

export default connect(mapStateToProps)(withStyles(styles)(ErrorPopup));