import { api } from "./api"

export const getGameById = async (id: string) => {
  const { data } = await api.get(`/games/${id}`)
  return data
}

export const getGameScreenshots = async (id: string) => {
  const { data } = await api.get(`/games/${id}/screenshots`)
  return data.results
}

export const getGames = async (query: string) => {
  const { data } = await api.get(`/games?${query}`)
  return data
}


