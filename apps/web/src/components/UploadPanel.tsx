import { CloudUpload } from "lucide-react";

export function UploadPanel() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold leading-tight">
        Please Upload the Documents
        <br />
        Before you ask Rag
      </h1>

      <div className="mt-10 rounded-xl border-2 border-dashed border-foreground/30 p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-foreground/5">
          <CloudUpload className="h-8 w-8" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Drag and Drop Or
          <button className="ml-1 underline hover:text-foreground">Browse File</button>
          
          To Upload Document
        </p>
      </div>
    </section>
  );
}


