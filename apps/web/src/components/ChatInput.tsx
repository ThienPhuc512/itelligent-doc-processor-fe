"use client";

import { SendHorizontal, Paperclip } from "lucide-react";

export function ChatInput() {
  return (
    <div className="sticky bottom-0 w-full border-t bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-4">
        <button className="h-10 w-10 rounded-md border text-muted-foreground hover:bg-foreground/5">
          <Paperclip className="mx-auto h-5 w-5" />
        </button>
        <input
          className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none"
          placeholder="Type a message to Rag..."
        />
        <button className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
          <SendHorizontal className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}


