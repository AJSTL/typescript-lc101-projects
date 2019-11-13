import {Astronaut} from './astronaut';
import {Cargo} from './cargo';
import {Rocket} from './rocket';
import {Payload} from './Payload';

export class Astronaut {
    let massKg: number;
    let name: string;
    constructor(massKg, name) {
        this.name = name;
        this.massKg = massKg;
    }
}