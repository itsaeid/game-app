import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import RatingStars from "./rating-stars";

interface ProductCardProps {
  id: number;
  name: string;
  rating: number;
  image: string;
  released?: string;
  genres?: string;
  platforms?: string;

}

export default function ProductCard({
  id,
  name,
  rating,
  image,
  released,
}: ProductCardProps) {
  return (
    <Card dir="rtl" className="justify-between">
      <CardContent className="flex flex-col items-stretch justify-between gap-2">
        <div className="space-y-3">
          <img
            src={image}
            alt={name}
            className="rounded-2xl object-cover w-full h-48"
          />
          <div className="justify-between items-center flex">
            <RatingStars rating={rating} />
            <span className="text-sm">Released: {released}</span>
          </div>
          <h3 className="text-center font-semibold text-xl">{name}</h3>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/products/${id}`} className="w-full">
          <Button className="w-full bg-primary">More details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
