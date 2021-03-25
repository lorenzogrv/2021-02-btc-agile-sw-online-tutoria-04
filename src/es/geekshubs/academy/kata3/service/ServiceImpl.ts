import { Builder } from '../bulider/Builder';
import { Animal } from '../model/animal/Animal';
import { Repository } from '../repository/Repository';
import { Service } from './Service';

export class ServiceImpl implements Service {
    
    constructor(public repository : Repository) { }

    get(index:number) : Animal{
        return this.getList()[index];
    }

    put(animal: Animal) : number {
        return this.getList().push(animal);
    }

    shift() : Animal {
        return this.getList().shift()!;
    }

    pop() : Animal {
        return this.getList().pop()!;
    }

    length() : number {
        return this.getList().length;
    }

    private getList() {
        return this.repository.getList();
    }
}



