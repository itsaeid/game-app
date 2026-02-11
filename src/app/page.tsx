"use client"
import { fetcher } from "@/lib/fetcher"
import useSWR from "swr"

export default function GamesPage() {
  const { data, error, isLoading } = useSWR("/games", fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading games</div>

  return (
    <div>
     اتاباتتاتا
    </div>
  )
}