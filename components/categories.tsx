"use client";

import { FcFlashOn, FcMultipleDevices, FcMusic, FcOldTimeCamera, FcSalesPerformance, FcSportsMode } from "react-icons/fc";

import { CategoriesItem } from "@/components/categories-item";

const categories = [
  {
    label: "All",
    value: undefined,
    icon: undefined,
  },
  {
    label: "Popular",
    value: "popular",
    icon: FcFlashOn,
  },
  {
    label: "Computer Science",
    value: "cs",
    icon: FcMultipleDevices,
  },
  {
    label: "Accounting",
    value: "accounting",
    icon: FcSalesPerformance,
  },
  {
    label: "Music",
    value: "music",
    icon: FcMusic,
  },
  {
    label: "Fitness",
    value: "fitness",
    icon: FcSportsMode,
  },
  { 
    label: "Photography",
    value: "photography",
    icon: FcOldTimeCamera,
  },
]

export const Categories = () => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <CategoriesItem
          key={category.value}
          label={category.label}
          icon={category.icon}
          value={category.value}
        />
      ))}
    </div>
  )
}