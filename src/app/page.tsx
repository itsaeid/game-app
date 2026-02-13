"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GamesPage() {


  return (
    <div className="flex justify-center-safe items-center h-screen">
      <Link href="/products">
      <Button>Explore games</Button>
      </Link>
    </div>
)
}