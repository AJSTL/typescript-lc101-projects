import {Astronaut} from './astronaut';
import {Cargo} from './cargo';
import {Rocket} from './rocket';
import {Payload} from './Payload';

export class Rocket {
    let name: string;
    let totalCapacityKg: number;
    let cargoItems: string[];
    let astronauts: object[];

    constructor(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
       

    }

    currentMassKg(): number {

    }

    canAdd(item: Payload): boolean {

    }

    addCargo(cargo: Cargo) {

    }

    addAstronaut(astronaut: Astronaut) {

    }
}
