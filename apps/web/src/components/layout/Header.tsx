import { MessageSquareHeart, UserCircle } from "lucide-react";

export function Header() {
  return (
    <header>
      <div className="border-b py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <UserCircle className="h-8 w-8" />
            <div>
              <div className="font-semibold">Nguyễn Hà Thiên Phúc</div>
              <div className="text-sm text-muted-foreground">phuc@uili.net</div>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
            <MessageSquareHeart className="h-4 w-4" />
            Give feedback
          </button>
        </div>
      </div>
    </header>
  )
}