import { Environment } from "../../environment";
import { Api } from "../axios-config";

const getAll = async (page = 1, filter = ''): Promise<any> => {
    try {
    
      let endpoints = [];
      
      for (let i = 1; i < 11; i++) {
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


  export const PokemonsService = {
    getAll
  };