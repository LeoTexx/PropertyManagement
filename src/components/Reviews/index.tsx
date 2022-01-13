import { Container } from "./styles";
import ThumbsUpIcon from "../../assets/thumb-up.svg";
import ThumbsDownIcon from "../../assets/thumb-down.svg";

interface ReviewsProps {
  review: {
    author: string;
    channel: string;
    comment: string;
    headline: string;
    negativeFeedback: string | null;
    positiveFeedback: string | null;
    publishedAt: string;
    score: number;
  };
}

export function Reviews({ review }: ReviewsProps) {
  return (
    <Container>
      <div>
        <span>
          <strong>{review.score} </strong>/ 5
        </span>
        <img
          src={require(`../../assets/${review.channel}.svg`)}
          alt="Channel"
        />
      </div>
      <h1>{review.headline}</h1>
      <p>{review.comment}</p>
      <p>
        {review.positiveFeedback && <img src={ThumbsUpIcon} alt="Thumbs Up" />}
        {review.positiveFeedback}
      </p>
      <p>
        {review.negativeFeedback && (
          <img src={ThumbsDownIcon} alt="Thumbs Down" />
        )}
        {review.negativeFeedback}
      </p>

      <h4>{review.author}</h4>
      <span>
        Reviewed{" "}
        {new Intl.DateTimeFormat("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(review.publishedAt))}
      </span>
    </Container>
  );
}
