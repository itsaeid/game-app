import { Card, CardContent, CardFooter } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

export default function ProductCardSkeleton() {
  return (

    <Card dir="rtl" className="justify-between md:w-71 animate-pulse">
      <CardContent className="flex flex-col items-stretch justify-between gap-2">
        <div className="space-y-3 w-full">

          <Skeleton className="w-full h-48 rounded-2xl" />

          <div className="flex justify-between items-center">
            <Skeleton className="h-5 w-24 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
          </div>

          <Skeleton className="h-6 w-3/4 mx-auto rounded-md" />

        </div>
      </CardContent>

      <CardFooter>
        <Skeleton className="h-10 w-full rounded-md" />
      </CardFooter>
    </Card>
  )
}
