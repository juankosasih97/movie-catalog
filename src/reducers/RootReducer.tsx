let sample = require('../sample.json');
let listingArray = sample.entries;

const initState = {
  listing: listingArray,
  isModalOpen: false,
  isErrorOpen: false,
  errorMessage: "",
  modalImage: "",
  modalTitle: "",
  modalDescription: "",
  modalReleaseYear: 0
}

const RootReducer = (state = initState, action: any) => {
  if (action.type === "OPEN_MODAL"){
    return {
      ...state,
      isModalOpen: true,
      modalImage: action.image,
      modalTitle: action.title,
      modalDescription: action.description,
      modalReleaseYear: action.releaseYear
    }
  }
  if (action.type === "CLOSE_MODAL"){
    return {
      ...state,
      isModalOpen: false
    }
  }
  if (action.type === "OPEN_ERROR"){
    return {
      ...state,
      isErrorOpen: true,
      errorMessage: action.errorMessage
    }
  }
  if (action.type === "CLOSE_ERROR"){
    return {
      ...state,
      isErrorOpen: false
    }
  }
  return state;
}

export default RootReducer;