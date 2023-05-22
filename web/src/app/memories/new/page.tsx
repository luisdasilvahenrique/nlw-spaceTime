import Link from "next/link";
import { Camera, ChevronLeft } from "lucide-react";
import { NewMemoryForm } from "@/components/NewMemoryForm";

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar á timeline
      </Link>

      <NewMemoryForm />
    </div>
  );
}
