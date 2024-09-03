import { Cards } from "./cards";

export interface GameStructure {
    cards?: Cards,
    emptyAndFront: any[],
    duplicated: any[],
    score: number
}