import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Container } from "./shared/components/Container";
import { Menu } from "./shared/components/Menu";
import { PokemonProvider } from "./shared/context/pokemon-context/PokemonContext";

function App() {
  return (
    <PokemonProvider >
      <Menu /> 
      <Container>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Container>
    </PokemonProvider>
  );
}

export default App;
