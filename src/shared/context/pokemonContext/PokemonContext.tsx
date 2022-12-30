import { createContext, useContext, useState } from "react";
import { IPokemonSelecionado } from "./interface/IPokemonSelecionado";

interface IPokemonContextData {
  pokemonSelecionado: IPokemonSelecionado;
  setPokemonSelecionado: React.Dispatch<IPokemonSelecionado>;
}

interface IPokemonProviderProps {
  children: React.ReactNode;
}

const PokemonContext = createContext({} as IPokemonContextData);


export const PokemonProvider: React.FC<IPokemonProviderProps> = ({ children }) => {
  const [pokemonSelecionado, setPokemonSelecionado] = useState<IPokemonSelecionado>({} as IPokemonSelecionado);

  return (
      <PokemonContext.Provider
        value={{
          pokemonSelecionado,
          setPokemonSelecionado
        }}
      >
        {children}
      </PokemonContext.Provider>
  );
}

export const usePokemonContext = () => useContext(PokemonContext);