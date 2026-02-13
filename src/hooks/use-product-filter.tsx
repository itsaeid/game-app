import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useProductFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      router.push(`?${params.toString()}`);
    },
    [searchParams, router],
  );

  return {
    updateParam,
    search: searchParams.get("search") || "",
    ordering: searchParams.get("ordering") || "",
    page: Number(searchParams.get("page") || "1"),
  };
}
