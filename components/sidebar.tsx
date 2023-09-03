"use client";

import Image from "next/image"
import { BiCompass, BiLayout, BiCart, BiVideo, BiSolidLayout, BiSolidVideo, BiSolidCompass, BiSolidCart, BiCog, BiSolidCog } from "react-icons/bi";

import { SidebarItem } from "@/components/sidebar-item"

const routes = [
  {
    icon: BiLayout,
    activeIcon: BiSolidLayout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: BiCompass,
    activeIcon: BiSolidCompass,
    label: "Courses",
    href: "/search"
  },  
  {
    icon: BiCog,
    activeIcon: BiSolidCog,
    label: "Settings",
    href: "/cart"
  },
]

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white">
      <div className="p-6">
        <Image
          height={130}
          width={130}
          alt="logo"
          src="/logo.svg"
        />
      </div>

      <div className="flex flex-col w-full mt-8">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            icon={route.icon}
            activeIcon={route.activeIcon}
            label={route.label}
            href={route.href}
          />
        ))}
      </div>
    </div>
  )
}