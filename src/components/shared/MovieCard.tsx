import { Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { openModal } from "../../actions/movieModalActions";

interface Props{
  image: string;
  title: string;
  description: string;
  releaseYear: number;
}

export default function MovieCard (props: Props) {

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal(props))
  };

  return (
    <Card>
      <CardActionArea onClick={handleOpenModal}>
        <CardContent>
          <img src={props.image} alt={props.title} style={{maxWidth: "100%", maxHeight: "100%"}}></img>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
