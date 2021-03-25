import { Animal } from "../model/animal/Animal";
import { Repository } from "./Repository";

export class RepositoryImpl implements Repository {

    constructor(public list: Array<Animal>) {}

    getList() : Array<Animal> {
        return this.list;
    }
}