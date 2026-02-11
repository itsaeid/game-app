"use client"
import { fetcher } from "@/lib/fetcher"
import useSWR from "swr"

export default function GamesPage() {
  const { data, error, isLoading } = useSWR("/games", fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading games</div>

  return (
    <div>
      {data?.results?.map((game: any) => (
        <div key={game.id} className="flex w-full">
          <h3>{game.name}</h3>
          <div className="w-2 h-5 bg-black"></div>
          <span>{game.rating}</span>
          <img src={game.background_image} alt="" className="w-50" />
        </div>
      ))}
    </div>
  )
}