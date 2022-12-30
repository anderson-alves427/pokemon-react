import { usePokemonContext } from "../../shared/context/pokemonContext/PokemonContext";
import "./styles.css";

export const DetalhePokemon = () => {
  const { pokemonSelecionado } = usePokemonContext();
  {console.log("---", pokemonSelecionado)}

  return (
    <section className="section-detalhe">
      <h2 className="nome-pokemon">{pokemonSelecionado.forms[0].name}</h2>
      <img src={pokemonSelecionado} alt="" />
    </section>
  );
}