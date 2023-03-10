import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { usePokemonContext } from "../../shared/context/pokemonContext/PokemonContext";
import { Environment } from "../../shared/environment";
import { PokemonsService } from "../../shared/services/pokemons/PokemonsService";
import { IListaPokemons } from "./interfaces/IListaPokemons";
import "./styles.css";

export const ListaPokemons = () => {
    const { setPokemonSelecionado } = usePokemonContext();
    const navigate = useNavigate();

    const [listaPokemons, setListaPokemons] = useState<IListaPokemons[]>([]);
    const [pokemonsFiltrados, setPokemonsFiltrados] = useState<IListaPokemons[]>([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [totalPokemons, setTotalPokemons] = useState(0);

    const handleClickButton = (valor: number) => {
        setPaginaAtual(prevState => prevState + valor);
        
    }

    const filtraPokemon = (value: string) => {
        let filtro = [];
        console.log(value.toLocaleLowerCase());
        console.log('TESTE');
        for (let i in listaPokemons) {
            if (listaPokemons[i].data.forms[0].name.includes(value.toLocaleLowerCase())) {
                filtro.push(listaPokemons[i]);
            }
        }

        setPokemonsFiltrados(filtro);
    }

    useEffect(() => {
        PokemonsService.getCountTotalPokemons()
        .then((result) => {

            if (result instanceof Error) {
                console.log(result.message);
            return 0;
            } else {
                setTotalPokemons(result.data.count);

        }});
    }, []);

    useEffect(() => {
    
        PokemonsService.getAll(paginaAtual)
        .then((result) => {

            if (result instanceof Error) {
                console.log(result.message);
            } else {
            console.log(result);
            setListaPokemons(result);
            setPokemonsFiltrados(result);

        }});

      }, [paginaAtual]);
      
    return (
        <>
            <section className="section-pokemon">
                <h1 className="titulo-pokemon">
                    Pokemon em React
                </h1>
                <div className="container-pesquisa">
                    <span>Pesquise:</span>
                    <div>
                        <BiSearchAlt />
                        <input type="text" className="input-pesquisa"  onChange={(e) => filtraPokemon(e.target.value)}/>
                    </div>
                </div>
            </section>

            <section className="lista-pokemons">
                {pokemonsFiltrados.map(item => (
                    <div className="card-pokemon" key={item.data.id} onClick={ () => {
                        navigate(`/detalhe/${item.data.id}`);
                        setPokemonSelecionado(item.data);
                    }}>
                        <img className="imagem-pokemon" src={item.data.sprites.front_default} alt={`pokemon ${item.data.forms[0].name}`} />
                        <p>{item.data.forms[0].name}</p>
                        <div className="div-button-detalhe">
                            <button className="detalhes-pokemon-card">Ver mais</button>
                        </div>
                    </div>
                ))}
            </section>

            <div className="container-paginacao">
                <button disabled={paginaAtual === 1} onClick={ ()=> handleClickButton(-1)}>Anterior</button>
                <button onClick={ ()=> handleClickButton(+1)} disabled={paginaAtual*Environment.LIMIT_SEARCH > totalPokemons}>Pr??xima</button>
            </div>
        </>
    );
}