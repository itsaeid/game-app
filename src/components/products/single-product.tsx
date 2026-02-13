import Link from "next/link";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import RatingStars from "./rating-stars";
import { Button } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";



interface SingleProductProps {
  game: any;
}

export default function SingleProduct({ game }: SingleProductProps) {
  return (
    <div className="px-20 py-20">
        <Link href="/products" className="text-sm text-primary mb-5 inline-block">
        <Button variant="outline" size="sm"><ChevronLeftIcon/>Back</Button>
        </Link>
      {/* first row  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="m-h-50">
          <img
            className="rounded-2xl m-h-50 shadow-2xl object-cover w-full"
            src={game.background_image}
            alt={game.name}
          />
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl font-semibold">{game.name}</h2>
            <RatingStars rating={game.rating} />
          </div>
          <span className="text-sm text-gray-500">
            Released: {game.released}
          </span>
          <Separator className="my-4" />
          {/* badges  */}
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="text-lg font-semibold mb-2">Play time: {game.playtime}</h3>
            <h3 className="text-lg font-semibold mb-2">
              Metacritic: {game.metacritic}
            </h3>

            <div className="flex gap-2">
              <span className="text-lg font-semibold">Genre:</span>
              {game.genres?.map((genre: any) => (
                <Badge key={genre.id}>{genre.name}</Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="text-lg font-semibold">Genre:</span>
              {game.platforms?.map((platform: any) => (
                <Badge key={platform.platform.id}>
                  {platform.platform.name}
                </Badge>
              ))}
            </div>
          </div>
          <Separator className="my-4" />
          
        </div>
      </div>
      {/* second row  */}
      <div>
        <div className="mt-5 gap-4">
            <h3 className="text-lg  font-semibold mb-2">Description:</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              {game.description_raw}
            </p>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}
