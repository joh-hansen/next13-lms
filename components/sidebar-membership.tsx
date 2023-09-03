import { Button } from "@/components/ui/button"

export const SidebarMembership = () => {
  return (
    <div className="rounded-md bg-sky-700 text-white p-4">
      <p className="mb-4">
        Join membership
      </p>
      <p className="text-xs text-slate-200">
        Access all courses anywhere and anytime
      </p>
      <Button size="sm" variant="secondary" className="mt-20 rounded-full text-sky-700 w-full">
        Join Now
      </Button>
    </div>
  )
}