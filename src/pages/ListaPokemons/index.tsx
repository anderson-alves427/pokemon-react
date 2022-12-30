import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { usePokemonContext } from "../../shared/context/pokemonContext/PokemonContext";
import { PokemonsService } from "../../shared/services/pokemons/PokemonsService";
import { IListaPokemons } from "./interfaces/IListaPokemons";
import "./styles.css";

export const ListaPokemons = () => {
    const { setPokemonSelecionado } = usePokemonContext();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [listaPokemons, setListaPokemons] = useState<IListaPokemons[]>([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [totalPokemons, setTotalPokemons] = useState(0);

    const handleClickButton = (valor: number) => {
        setPaginaAtual(prevState => prevState + valor);
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
        setIsLoading(true);
    
        PokemonsService.getAll(paginaAtual)
        .then((result) => {
            setIsLoading(false);

            if (result instanceof Error) {
                console.log(result.message);
            } else {
            console.log(result);
            setListaPokemons(result);

        }});

      }, [paginaAtual]);
      
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
                    <div className="card-pokemon" key={item.data.id} onClick={ () => {
                        navigate(`/detalhe/${item.data.id}`);
                        setPokemonSelecionado(item.data);
                    }}>
                        <img className="imagem-pokemon" src={item.data.sprites.front_default} alt={`pokemon ${item.data.forms[0].name}`} />
                        <p>{item.data.forms[0].name}</p>
                    </div>
                ))}
            </section>

            <div className="container-paginacao">
                <button disabled={paginaAtual === 1} onClick={ ()=> handleClickButton(-1)}>Anterior</button>
                <button onClick={ ()=> handleClickButton(+1)} disabled={paginaAtual*20 > totalPokemons}>Próxima</button>
            </div>
        </>
    );
}