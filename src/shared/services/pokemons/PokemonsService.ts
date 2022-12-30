import { ICountTotalPokemons } from './interface/ICountTotalPokemons';
import { Environment } from "../../environment";
import { Api } from "../axios-config";

const getAll = async (paginaAtual: number): Promise<any> => {
    try {
    
      let endpoints = [];
      
      for (let i = 1 + (paginaAtual - 1)*Environment.LIMIT_SEARCH; i <= paginaAtual*Environment.LIMIT_SEARCH; i++) {
        endpoints.push(`${Environment.URL_BASE}/pokemon/${i}`);
      }
      
      const response = Promise.all(endpoints.map((endpoint) => Api.get(endpoint))).then((res) => {
        return res;
      } );
      
      return response;
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao listar os registros de pokemons.');
    }
  };


  const getCountTotalPokemons = async (): Promise<ICountTotalPokemons | Error> => {
    try {
      
      const urlRelativa = `/pokemon?offset=0&limit=1`;

      const { data } = await Api.get(urlRelativa);

      if (data) {
        return {
          data
        };
      }
      return new Error('Erro ao pegar a quantidade máxima de pokemóns.');
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao pegar a quantidade máxima de pokemóns.');
    }
  }

  export const PokemonsService = {
    getAll,
    getCountTotalPokemons
  };