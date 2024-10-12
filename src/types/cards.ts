export interface Card {
    name: string,
    src: string,
    matched?: boolean,
    id?: number
}

export interface Cards {
    cards: Card[]
}