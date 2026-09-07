export interface IPlayerType {
    "id": number,
    "name": string,
    "country": string,
    "role": string,
    "battingStyle": string,
    "bowlingStyle": string,
    "age": number,
    "jerseyNumber": number,
    "matches": number,
    "runs": number,
    "centuries": number,
    "halfCenturies": number,
    "average": number,
    "strikeRate": number,
    "price": number,
    "currency": string,
    "image": string
}

export interface IPlayerTypePromise {
    playersPromise: Promise<IPlayerType[]>
}