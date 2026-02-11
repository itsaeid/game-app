import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  max?: number;
}

export default function RatingStars({ rating, max = 5 }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex">
      {Array.from({ length: max }).map((_, index) => {
        if (index < fullStars) {
          return (
            <Star
              key={index}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          );
        }
        if (index === fullStars && hasHalfStar) {
          return (
            <Star
              key={index}
              className="w-4 h-4 fill-yellow-400/50 text-yellow-400"
            />
          );
        }

        return <Star key={index} className="w-4 h-4 text-muted-foreground" />;
      })}
    </div>
  );
}
