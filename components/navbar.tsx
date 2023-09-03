import { UserButton } from "@clerk/nextjs"

import { SearchInput } from "@/components/search-input"
import { MobileSidebar } from "@/components/mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white">
      <MobileSidebar />
      <SearchInput />
      <div className="ml-auto">
        <UserButton
          afterSignOutUrl="/"
        />
      </div>
    </div>
  )
}