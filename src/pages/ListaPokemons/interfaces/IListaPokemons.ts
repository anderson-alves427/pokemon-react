interface IForms {
    name: string;
}

interface Isprites {
    front_default: string;
}

export interface IListaPokemons {

    data: {
        id: number;
        forms: IForms[];
        sprites: Isprites;
    }
}