import { Api } from "../axios-config";

interface IResultsResponse {
    name: string;
    url: string;
}

interface IResponseGetAll {
    data: {
        count: number;
        next: string | null;
        previous: string | null;
        results: IResultsResponse[];
    }
}

const getAll = async (page = 1, filter = ''): Promise<IResponseGetAll | Error> => {
    try {
      const urlRelativa = `/pokemon`;
  
      const { data } = await Api.get(urlRelativa);
  
      if (data) {
        return {
          data
        };
      }
  
      return new Error('Erro ao listar os registros de pokemons.');
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao listar os registros de pokemons.');
    }
  };