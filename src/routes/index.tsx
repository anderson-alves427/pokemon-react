import { Navigate, Route, Routes } from "react-router-dom";
import { DetalhePokemon } from "../pages/DetalhePokemon";
import { ListaPokemons } from "../pages/ListaPokemons";
import { Sobre } from "../pages/Sobre";

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/pokemon-react" element={<ListaPokemons />}/>
      <Route path="/sobre" element={<Sobre />}/>
      <Route path="/detalhe/:id" element={<DetalhePokemon />} />
      <Route path="*" element={<Navigate to="//pokemon-react" />}/>
    </Routes>
  );
}