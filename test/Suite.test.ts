import { RepositoryImpl } from './../src/es/geekshubs/academy/kata3/repository/RepositoryImpl';
import { Repository } from './../src/es/geekshubs/academy/kata3/repository/Repository';
import { Animal } from "../src/es/geekshubs/academy/kata3/model/animal/Animal";
import { AnimalImpl } from "../src/es/geekshubs/academy/kata3/model/animal/AnimalImpl";
import { HorseImpl } from "../src/es/geekshubs/academy/kata3/model/horse/HoreImpl";
import { Horse } from "../src/es/geekshubs/academy/kata3/model/horse/Horse";
import { Snake } from "../src/es/geekshubs/academy/kata3/model/snake/Snake";
import { SnakeImpl } from "../src/es/geekshubs/academy/kata3/model/snake/SnakeImpl";
import { Builder } from '../src/es/geekshubs/academy/kata3/bulider/Builder';
import { ServiceImpl } from '../src/es/geekshubs/academy/kata3/service/ServiceImpl';

describe('Testing', function (){

    test('Animal src name', function () {
        //Arrange
        var expected = "Animal-1";
        //Act
        var result = new AnimalImpl("Animal-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Animal api name', function () {
        //Arrange
        var expected = "Animal-1";
        //Act
        var result : Animal = new AnimalImpl("Animal-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Horse src name', function () {
        //Arrange
        var expected = "Horse-1";
        //Act
        var result = new HorseImpl("Horse-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Horse api name', function () {
        //Arrange
        var expected = "Galloping...Horse-1 moved 45m.";
        //Act
        var result : Horse = new HorseImpl("Horse-1");
        //Assert
        expect(result.move()).toBe(expected);
    });

    test('Snake src name', function () {
        //Arrange
        var expected = "Snake-1";
        //Act
        var result = new SnakeImpl("Snake-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Snake api name', function () {
        //Arrange
        var expected = "Slithering...Snake-1 moved 30m.";
        //Act
        var result: Snake = new SnakeImpl("Snake-1");
        //Assert
        expect(result.move()).toBe(expected);
    });


    /// REPOSITORY + BUILDER ///

    test('Repository api getList', function () {
        //Arrange
        var expected = new Builder().list;
        //Act
        var result : Repository  = new RepositoryImpl(expected);
        //Assert
        expect(result.getList()).toEqual(expected);
    });


    test('service - shift', function () {
        //Arrange
        var builder = new Builder().list;
        var repository = new RepositoryImpl(builder);

        var horseExpected = builder[0];
        //Act
        var service =  new ServiceImpl(repository);
        var res = service.shift();

        //Assert
        expect(res).toEqual(horseExpected);
    });

    
    test('service - pop', function () {
        //Arrange
        var builder = new Builder().list;
        var repository = new RepositoryImpl(builder);

        var SnakeExpected = builder[builder.length-1];
        //Act
        var service =  new ServiceImpl(repository);
        var res = service.pop();

        //Assert
        expect(res).toEqual(SnakeExpected);
    });

    test('service - push', function () {
        //Arrange
        var animal = new AnimalImpl("Animal");

        var builder = new Builder().list;
        var repository = new RepositoryImpl(builder);
        //Act
        var service =  new ServiceImpl(repository);
        var res = service.put(animal);
        var animalExpected = builder[builder.length-1];

        //Assert
        expect(animal).toEqual(animalExpected);
    });

    test('service - get', function () {
        //Arrange
        const index = 1;
        var builder = new Builder().list;
        var repository = new RepositoryImpl(builder);

        var animal = builder[index];
        //Act
        var service =  new ServiceImpl(repository);
        var res = service.get(index);

        //Assert
        expect(res).toEqual(animal);
    });

    test('service - length', function () {
        //Arrange
        var builder = new Builder().list;
        const expected = builder.length + 1;
        var repository = new RepositoryImpl(builder);
        //Act
        var service =  new ServiceImpl(repository);
        service.put(new HorseImpl(""));
        const res = service.length();
        //Assert
        expect(res).toBe(expected);
    });

});
