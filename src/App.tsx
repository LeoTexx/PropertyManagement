import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header";
import { ReviewsList } from "./components/ReviewsList";
import { fetchReviews } from "./libs/redux/reducers/reviewSlice";
import { GlobalStyle } from "./styles/global";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  return (
    <>
      <Header />
      <ReviewsList />
      <GlobalStyle />
    </>
  );
}

export default App;
