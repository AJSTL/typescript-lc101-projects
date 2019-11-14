import { Payload } from './Payload';
import { Cargo } from './cargo';
import { Rocket } from './rocket';

export class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor(massKg: number, name: string) {
        this.name = name;
        this.massKg = massKg;
    }
}