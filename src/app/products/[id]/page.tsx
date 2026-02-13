"use client"

import { useParams } from "next/navigation"
import useSWR from "swr"
import { fetcher } from "@/lib/fetcher"
import SingleProduct from "@/components/products/single-product"

export default function ProductPage() {
  const params = useParams()
  const id = params.id as string

  const { data, isLoading, error } = useSWR(
    `/games/${id}`,
    fetcher
  )

  if (isLoading) return <div> is Loading ...</div>
  if (error) return <div>خطا در دریافت اطلاعات</div>

  return <SingleProduct game={data} />
}
