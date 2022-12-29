import { Route, Routes } from "react-router-dom";
import { ListaPokemons } from "../pages/ListaPokemons";

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<ListaPokemons />}/>
    </Routes>
  );
}