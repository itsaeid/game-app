"use client";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import ProductCard from "./product-card";
import ProductCardSkeleton from "./product-card-skeleton";
import { useSearchParams } from "next/navigation";
import GamePagination from "./game-pagination";
import useProductFilter from "@/hooks/use-product-filter";

export default function AllProducts() {
  const { page, updateParam } = useProductFilter();

  const pageSize = 20;

  const queryParams = new URLSearchParams({
    page: page.toString(),
    page_size: pageSize.toString(),
  }).toString();

  const searchParams = useSearchParams();

  // const query = `/games?search=${search}&genres=${genre}&ordering=${ordering}`
  const query = `/games?${queryParams}}`;

  const { data, error, isLoading } = useSWR(query, fetcher);

  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );

  if (error) return <div>Error loading games</div>;

  const totalPages = data ? Math.ceil(data.count / pageSize) : 0;

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.results?.map((game: any) => (
          <ProductCard
            key={game.id}
            image={game.background_image}
            id={game.id}
            name={game.name}
            rating={game.rating}
            released={game.released}
            genres={game.genres}
            platforms={game.platforms}
          />
        ))}
      </div>
      <div className="">
        <GamePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => {
          updateParam("page", newPage.toString())
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
      />
      </div>
    </div>
  );
}
