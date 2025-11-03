"use client";

import { MessageSquare, MoreVertical, Plus } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 shrink-0 border-r bg-sidebar p-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">Rag chatbot</div>
        <button className="inline-flex h-8 items-center gap-2 rounded-md bg-foreground/5 px-3 text-sm hover:bg-foreground/10">
          <Plus className="h-4 w-4" />
          New Chat
        </button>
      </div>

      <div className="mt-6 text-xs font-medium text-muted-foreground">TODAY</div>
      <ul className="mt-2 space-y-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index} className="group">
            <button className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm hover:bg-foreground/5">
              <span className="flex items-center gap-2 truncate">
                <MessageSquare className="h-4 w-4" />
                <span className="truncate">Chatbot Definition...</span>
              </span>
              <MoreVertical className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-xs font-medium text-muted-foreground">YESTERDAY</div>
      <ul className="mt-2 space-y-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index} className="group">
            <button className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm hover:bg-foreground/5">
              <span className="flex items-center gap-2 truncate">
                <MessageSquare className="h-4 w-4" />
                <span className="truncate">Chatbot Definition...</span>
              </span>
              <MoreVertical className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-3 border-t pt-4">
        <div className="h-8 w-8 rounded-full bg-foreground/10" />
        <div className="text-sm">
          <div className="font-medium">Nguyễn Hà Thiên Phúc</div>
          <div className="text-muted-foreground">phuc@uili.net</div>
        </div>
      </div>
    </aside>
  );
}


