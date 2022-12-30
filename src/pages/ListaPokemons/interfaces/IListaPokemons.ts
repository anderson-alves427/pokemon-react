import { IPokemonSelecionado } from './../../../shared/context/pokemonContext/interface/IPokemonSelecionado';
interface IForms {
    name: string;
}

interface Isprites {
    front_default: string;
}

export interface IListaPokemons {

    data: IPokemonSelecionado
}