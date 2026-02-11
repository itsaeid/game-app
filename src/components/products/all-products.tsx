"use client";
import { fetcher } from "@/lib/fetcher";
import { useState } from "react";
import useSWR from "swr";
import ProductCard from "./product-card";

export default function AllProducts() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [ordering, setOrdering] = useState("");

  // const query = `/games?search=${search}&genres=${genre}&ordering=${ordering}`
  const query = "/games";

  const { data, error, isLoading } = useSWR(query, fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading games</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data?.results?.map((game: any) => (
        <ProductCard
          key={game.id}
          image={game.background_image}
          id={game.id}
          name={game.name}
          rating={game.rating}
          released={game.released}
        />
      ))}
    </div>
  );
}
