import { UploadPanel } from "@/components/UploadPanel";
import { ChatInput } from "@/components/ChatInput";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-73px)] flex-col">
      <UploadPanel />
      <div className="flex-1" />
      <ChatInput />
    </div>
  )
}