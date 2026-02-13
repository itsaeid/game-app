// "use client";
// import useProductFilter from "@/hooks/use-product-filter";
// import { FunnelPlus } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Input } from "../ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import { useDebounce } from "use-debounce";

// export default function FilterProduct() {
//   const { search, updateParam } = useProductFilter();
//   const [localSearch, setLocalSearch] = useState(search);
//   const [debouncedSearch] = useDebounce(localSearch, 400);

//   useEffect(() => {
//     updateParam("search", debouncedSearch);
//   }, [debouncedSearch]);
//   return (
//     <div>
//       <div className="flex w-full bg-muted-foreground/10 px-3 py-3 rounded-2xl items-center gap-2">
//         <FunnelPlus className="text-gray-400" />
//         <span className="text-sm text-gray-400 font-semibold">
//           فیلتر محصولات
//         </span>
//       </div>
//       <div className="space-y-6">
//         <Input
//           placeholder="جستجو  ..."
//           className="w-full rounded-2xl mt-4"
//           value={localSearch}
//           onChange={(e) => setLocalSearch(e.target.value)}
//         />
//       </div>
//       <div className="mt-4">
//         <Select onValueChange={(val) => updateParam("ordering", val)}>
//           <SelectTrigger className="w-full rounded-2xl">
//             <SelectValue placeholder="مرتب‌سازی" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="-rating">بیشترین امتیاز</SelectItem>
//             <SelectItem value="rating">کمترین امتیاز</SelectItem>
//             <SelectItem value="-released">جدیدترین</SelectItem>
//             <SelectItem value="released">قدیمی‌ترین</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//     </div>
//   );
// }
"use client"

import useProductFilter from "@/hooks/use-product-filter"
import { FunnelPlus } from "lucide-react"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox"
import { useDebounce } from "use-debounce"

const orderingOptions = [
  { label: "بیشترین امتیاز", value: "-rating" },
  { label: "کمترین امتیاز", value: "rating" },
  { label: "جدیدترین", value: "-released" },
  { label: "قدیمی‌ترین", value: "released" },
]

export default function FilterProduct() {
  const { search, updateParam } = useProductFilter()

  const [localSearch, setLocalSearch] = useState(search)
  const [debouncedSearch] = useDebounce(localSearch, 400)

  const [selectedOrderings, setSelectedOrderings] = useState<string[]>([])

  useEffect(() => {
    updateParam("search", debouncedSearch)
  }, [debouncedSearch])

  useEffect(() => {
    if (selectedOrderings.length === 0) {
      updateParam("ordering", "")
    } else {
      updateParam("ordering", selectedOrderings.join(","))
    }
  }, [selectedOrderings])

  const handleCheckboxChange = (value: string) => {
    setSelectedOrderings((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const clearFilters = () => {
    setSelectedOrderings([])
    updateParam("ordering", "")
  }

  return (
    <div>
      {/* Header */}
      <div className="flex w-full bg-muted-foreground/10 px-3 py-3 rounded-2xl items-center gap-2">
        <FunnelPlus className="text-gray-400" />
        <span className="text-sm text-gray-400 font-semibold">
          فیلتر محصولات
        </span>
      </div>

      {/* Search */}
      <div className="space-y-6">
        <Input
          placeholder="جستجو ..."
          className="w-full rounded-2xl mt-4"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
      </div>

      {/* Ordering Filter */}
      <div className="mt-6 space-y-4">
        <h3 className="text-sm font-semibold text-gray-400">
          مرتب‌سازی
        </h3>

        {orderingOptions.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <Checkbox
              checked={selectedOrderings.includes(option.value)}
              onCheckedChange={() =>
                handleCheckboxChange(option.value)
              }
            />
            <span className="text-sm">{option.label}</span>
          </div>
        ))}

        {/* None Option */}
        <div className="mt-4">
          <button
            onClick={clearFilters}
            className="text-sm text-red-400 hover:underline"
          >
            هیچ‌کدام
          </button>
        </div>
      </div>
    </div>
  )
}
