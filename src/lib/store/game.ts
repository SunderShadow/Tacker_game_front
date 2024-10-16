import {writable} from "svelte/store"

export type Player = {
  id: number,
  name: string,
  votes: number
}

export type LobbyID = number
export type GameData = {
  state: string,
  isOwner: boolean,
  players: Player[],
  lobby: {
    id: LobbyID
  }
}

export default writable<GameData>({
  state: "start",
  isOwner: false,
  players: [
    {
      id: 1,
      name: "Dog",
      votes: 0
    },
    {
      id: 2,
      name: "Dog2",
      votes: 0
    },
    {
      id: 3,
      name: "Dog3",
      votes: 0
    },
    {
      id: 4,
      name: "Dog4",
      votes: 0
    },
    {
      id: 5,
      name: "Dog5",
      votes: 0
    },
    {
      id: 6,
      name: "Dog6",
      votes: 0
    },
  ],
  lobby: {
    id: 0
  }
})