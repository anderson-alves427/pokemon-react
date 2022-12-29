import { Navigate, Route, Routes } from "react-router-dom";
import { DetalhePokemon } from "../pages/DetalhePokemon";
import { ListaPokemons } from "../pages/ListaPokemons";

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<ListaPokemons />}/>
      <Route path="/detalhe/:id" element={<DetalhePokemon />} />
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  );
}