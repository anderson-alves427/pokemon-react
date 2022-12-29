import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { PokemonsService } from "../../shared/services/pokemons/PokemonsService";
import { IListaPokemons } from "./interfaces/IListaPokemons";
import "./styles.css";

export const ListaPokemons = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [listaPokemons, setListaPokemons] = useState<IListaPokemons[]>([]);

    useEffect(() => {
        setIsLoading(true);
    
        PokemonsService.getAll()
        .then((result) => {
            setIsLoading(false);

            if (result instanceof Error) {
            alert(result.message);
            } else {
            console.log(result);
            setListaPokemons(result);

        }});

      }, []);
      
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
                {listaPokemons.map(item => (
                    <div className="card-pokemon" key={item.data.id}>
                        <img className="imagem-pokemon" src={item.data.sprites.front_default} alt={`pokemon ${item.data.forms[0].name}`} />
                        <p>{item.data.forms[0].name}</p>
                    </div>
                ))}
            </section>
        </>
    );
}