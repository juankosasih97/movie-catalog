export const openError = (errorMessage: string) => {
  return {
    type: "OPEN_ERROR",
    errorMessage
  }
}

export const closeError = () => {
  return {
    type: "CLOSE_ERROR"
  }
}