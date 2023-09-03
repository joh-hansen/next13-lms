"use client";

import qs from "query-string";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentCategory = searchParams.get("category");

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        category: currentCategory,
        search: debouncedValue,
      }
    }, { skipNull: true, skipEmptyString: true });

    router.push(url);
  }, [debouncedValue, currentCategory, router, pathname]);

  return (
    <div className="relative">
      <BiSearch
        size={18}
        className="absolute top-3 left-3 text-slate-600"
      />
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
        placeholder="Search for a course"
      />
    </div>
  );
};
