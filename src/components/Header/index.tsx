import { Container } from "./styles";
import BackgroundImage from "../../assets/background.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function Header() {
  const { height, width } = useWindowDimensions();

  return (
    <Container width={width} height={height}>
      <span>
        <p>ID: 091021</p> <h6>La Casa de las Flores</h6>
      </span>
      <img src={BackgroundImage} alt="Banner" />
      <div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}
