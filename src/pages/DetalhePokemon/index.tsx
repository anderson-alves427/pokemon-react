import { usePokemonContext } from "../../shared/context/pokemon-context/PokemonContext";
import "./styles.css";

export const DetalhePokemon = () => {
  const { pokemonSelecionado } = usePokemonContext();

  return (
    <section className="section-detalhe">
      <div>Tela de detalhe do pokemon</div>
      <span>Lista: </span>
      <span>{pokemonSelecionado.id}</span>
    </section>
  );
}