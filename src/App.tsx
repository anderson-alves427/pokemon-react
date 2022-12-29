import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Container } from "./shared/components/Container";
import { Menu } from "./shared/components/Menu";
import { PokemonProvider } from "./shared/context/PokemonContext";

function App() {
  return (
    <>
      <PokemonProvider >
      <BrowserRouter>
        <Menu /> 
        <Container>
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </PokemonProvider>
    </>
  );
}

export default App;
