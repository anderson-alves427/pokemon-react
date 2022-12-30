import { ITypes } from './ITypes';
import { ISprites } from './ISprites';
import { IAbilities } from "./IAbilities";
import { IForms } from './IForms';
import { IStats } from './IStats';

export interface IPokemonSelecionado {
    abilities: IAbilities[];
    sprites: ISprites;
    forms: IForms[];
    types: ITypes[];
    stats: IStats[];

}