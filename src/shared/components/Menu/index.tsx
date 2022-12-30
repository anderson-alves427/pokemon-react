import { useNavigate } from "react-router-dom";
import { IPokemonSelecionado } from "../../context/pokemonContext/interface/IPokemonSelecionado";
import { usePokemonContext } from "../../context/pokemonContext/PokemonContext";
import logoPokemon from "../../../public/assets/pokemon-png-logo.webp";
import "./styles.css";

export const Menu = () => {
    const navigate = useNavigate();
    const { setPokemonSelecionado } = usePokemonContext();

    const handleClick = (path: string): void => {
        navigate(path);
        setPokemonSelecionado({} as IPokemonSelecionado);
    }

    return(
        <header className="header-menu">
            <div className="container-menu">
                <img className="logo-pokemon" src={logoPokemon} alt="logo-pokemon" onClick={() => handleClick("/")}/>
                <nav className="nav-menu">
                    <ul>
                        <li onClick={ () => handleClick("/")}>Inicio</li>
                        <li onClick={ () => handleClick("/sobre")}>Sobre</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}