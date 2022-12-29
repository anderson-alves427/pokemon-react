import { ListaPokemons } from "./pages/ListaPokemons";
import { Container } from "./shared/components/Container";
import { Menu } from "./shared/components/Menu";

function App() {
  return (
    <>
      <Menu /> 
      <Container>
        <ListaPokemons />
      </Container>
    </>
  );
}

export default App;
