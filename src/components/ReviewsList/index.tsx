import { useSelector } from "react-redux";
import { Reviews } from "../Reviews";
import { Container } from "./styles";

export function ReviewsList() {
  const { reviews } = useSelector((state: any) => state.reviews);

  return (
    <Container>
      <span>{reviews.length} Reviews</span>
      {reviews.map((review: any) => (
        <Reviews review={review} />
      ))}
    </Container>
  );
}
