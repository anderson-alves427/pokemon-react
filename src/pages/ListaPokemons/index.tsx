import { BiSearchAlt } from "react-icons/bi";
import "./styles.css";

export const ListaPokemons = () => {
    return (
        <>
            <section className="section-pokemon">
                <h1 className="titulo-pokemon">
                    Pokemon Api
                </h1>
                <div className="container-pesquisa">
                    <span>Pesquise:</span>
                    <div>
                        <BiSearchAlt />
                        <input type="text" className="input-pesquisa" />
                    </div>
                </div>
            </section>

            <section className="lista-pokemons">
                <div className="card-pokemon">
                    <img className="imagem-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon img" />
                    <p>Charmander</p>
                </div>
                <div className="card-pokemon">
                    <img className="imagem-pokemon"  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="pokemon img" />
                    <p>Charmander</p>
                </div>

            </section>
        </>
    );
}