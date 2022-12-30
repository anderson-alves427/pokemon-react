import { usePokemonContext } from "../../shared/context/pokemonContext/PokemonContext";
import { IoArrowBackOutline } from "react-icons/io5";

import "./styles.css";
import { useNavigate } from "react-router-dom";

export const DetalhePokemon = () => {
  const navigate = useNavigate();
  const { pokemonSelecionado } = usePokemonContext();

  return (
    <section className="section-detalhe">
      <div className="back" onClick={() => navigate("/")}>
        <IoArrowBackOutline size={32}/>
      </div>
      {Object.keys(pokemonSelecionado).length === 0 ? (
        <>
          <h2 className="nome-pokemon">{pokemonSelecionado.forms[0].name}</h2>
          <img className="imagem-pokemon-detalhe" src={pokemonSelecionado.sprites.front_default} alt={`imagem pokemon${pokemonSelecionado.forms[0].name}`} />
          
          <div className="card-detalhe-pokemon">
            <div className="detalhe-primario">
              <div className="habilidades">
                <p className="p-detalhe">Habilidades</p>
                <ul>
                  {pokemonSelecionado.abilities.map((habilidade, index) => (
                    <li className="descricao-atributos" key={index}>{habilidade.ability.name}</li>
                  ))}
                </ul>
              </div>
              <div className="tipo">
                <p className="p-detalhe">Tipo</p>
                <ul>
                {pokemonSelecionado.types.map((type, index) => (
                    <li className="descricao-atributos" key={index}>{type.type.name}</li>
                  ))}
                </ul>
              </div>

            </div>
            <div className="atributos">
              {pokemonSelecionado.stats.map((item, index) => (
                <div className="span-atributos" key={index}>
                  <p className="descricao-atributos">{item.stat.name}</p>
                  <div className="container-atributo">
                    <div className="atributo-cor" 
                      style={{
                        width: `${(item.base_stat/120)*100}%`,
                        backgroundColor: `${item.stat.name === "hp" ? "green" : item.stat.name === "attack" ? "red" : item.stat.name === "defense" ? "blue" : item.stat.name === "special-attack" ? "yellow": item.stat.name === "special-defense" ? "brown": "gray"}`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : <div>Nenhum registro encontrado, por favor, volte na tela anterior e selecione um novo pokemon.</div>}
    </section>
  );
}