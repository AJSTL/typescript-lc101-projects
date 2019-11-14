import { Payload } from './Payload';
import { Astronaut } from './astronaut';
import { Rocket } from './rocket';

export class Cargo implements Payload {
    massKg: number;
    material: string;
    constructor(massKg: number, material: string) {
        this.material = material;
        this.massKg = massKg;
    }
}