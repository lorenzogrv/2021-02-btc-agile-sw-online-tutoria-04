import { Animal } from "../model/animal/Animal";

export interface Repository {
    getList() : Array<Animal> ;
}