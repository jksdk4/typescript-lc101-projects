import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    sumMass(items: Payload[]): number {
        let sumItems: number = 0;
        for (let i: number = 0; i < items.length; i++){
            sumItems += items[i].massKg;
        }
        return sumItems;
    }
    currentMassKg(): number {
        let combinedMass: number;
        combinedMass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return combinedMass;
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
        return false;
    }
    addCargo(cargo: Cargo){
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut){
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}