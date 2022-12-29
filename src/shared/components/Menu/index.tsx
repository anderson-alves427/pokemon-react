import { useNavigate } from "react-router-dom";
import { usePokemonContext } from "../../context/PokemonContext";
import "./styles.css";

export const Menu = () => {
    const navigate = useNavigate();
    const { setPokemonSelecionado } = usePokemonContext();

    const handleClick = (path: string): void => {
        navigate(path);
        setPokemonSelecionado({});
    }

    return(
        <header className="header-menu">
            <div className="container-menu">
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