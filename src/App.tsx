import { Container, GlobalStyle } from "./App.style";
import { Counter, ButtonsWrapper } from "./components";

function App() {
  return (
    <Container className="App">
      <GlobalStyle />
      <Counter />
      <ButtonsWrapper />
    </Container>
  );
}

export default App;
