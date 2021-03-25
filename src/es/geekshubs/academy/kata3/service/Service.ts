import { Animal } from "../model/animal/Animal";

export interface Service {
    
    get(index:number) : Animal;

    put(animal: Animal) : number;

    shift() : Animal ;

    pop() : Animal ;
}