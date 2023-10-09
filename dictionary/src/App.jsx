import Home from "./Components/Home/Home";
import { Container, Title } from "./Components/Home/style";
import Global from "./Global";

function App() {
  return (
    <>
      <Container>
        <Title>Dictionary in English</Title>
      </Container>
      <Home />
      <Global />
    </>
  );
}

export default App;
