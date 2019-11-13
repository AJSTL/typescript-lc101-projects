import {Astronaut} from './astronaut';
import {Cargo} from './cargo';
import {Rocket} from './rocket';
import {Payload} from './Payload';

export class Cargo {
    let massKg: number;
    let material: string;
    constructor(massKg, material) {
        this.material = material;
        this.massKg = massKg;
    }
}