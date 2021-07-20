interface Props{
  image: string;
  title: string;
  description: string;
  releaseYear: number;
}

export const openModal = (props: Props) => {
  return {
    type: "OPEN_MODAL", 
    ...props
  }
}

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL"
  }
}