import { BiBookOpen, BiHeart, BiSolidBookOpen, BiSolidBookReader, BiSolidStar, BiSolidTime } from "react-icons/bi"
import Image from "next/image"

import Link from "next/link";
import { Button } from "./ui/button";

interface CourseCardProps {
  title: string;
  author: string;
  imageUrl: string;
}

export const CourseCard = ({
  title,
  author,
  imageUrl,
}: CourseCardProps) => {
  return (
    <Link href="/search">
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          {/* <button className="z-10 rounded-full p-2 bg-black/70 absolute text-white top-2 right-2 hover:scale-110 hover:bg-black transition">
            <BiHeart />
          </button> */}
          <Image
            fill
            className="object-cover"
            alt={title}
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-sm md:text-xs text-slate-500">
            {author}
          </p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <div className="rounded-full bg-sky-100 p-1 flex items-center justify-center">
                <BiSolidBookReader className="text-sky-500 h-5 w-5 md:h-3 md:w-3" />
              </div>
              <span>12 Chapters</span>
            </div>
            <div className="flex items-center gap-x-1 text-slate-500">
              <div className="rounded-full bg-indigo-100 p-1 flex items-center justify-center">
                <BiSolidTime className="text-indigo-500 h-5 w-5 md:h-3 md:w-3" />
              </div>
              <span>4.6 Hours</span>
            </div>
          </div>
          <p className="text-md md:text-sm font-medium text-slate-700">
            $134.12
          </p>
        </div>
      </div>
    </Link>
  )
}