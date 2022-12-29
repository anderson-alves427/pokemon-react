import { createContext, useContext, useState } from "react";

interface IPokemonContextData {
  pokemonSelecionado: any;
  setPokemonSelecionado: React.Dispatch<any>;
}

interface IPokemonProviderProps {
  children: React.ReactNode;
}

const PokemonContext = createContext({} as IPokemonContextData);


export const PokemonProvider: React.FC<IPokemonProviderProps> = ({ children }) => {
  const [pokemonSelecionado, setPokemonSelecionado] = useState<any>({});
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