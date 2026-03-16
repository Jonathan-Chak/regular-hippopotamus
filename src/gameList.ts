import GameListJson from "./GameList.json"

type game={id:number, name:string, thumbnail:string, banner:string, description:string, version:number, likes:number}

export interface Game {
	id:number,
	name:string,
	path:string,
	thumbnail:string,
	banner:string,
	description:string,
	version:number,
	likes:number
}

//let gameList = "[{\"id\":\"1\",\"name\":\"Missile Defense\",\"thumbnail\":\"missileDefense.png\",\"description\":\"Defend yourself and your base against enemy missile attacks!\",\"version\":\"0.1\",\"likes\":\"0\"}]";
//let gameList = GameListJson
export const games = <Game[]> JSON.parse(JSON.stringify(GameListJson))
