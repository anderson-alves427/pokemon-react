import { ListaPokemons } from "./pages/ListaPokemons";
import { Container } from "./shared/components/Container";
import { Menu } from "./shared/components/Menu";
import { PokemonProvider } from "./shared/context/pokemon-context/PokemonContext";

function App() {
  return (
    <PokemonProvider >

      <Menu /> 
      <Container>
        <ListaPokemons />
      </Container>
    </PokemonProvider>
  );
}

export default App;
