import Link from "next/link";
import { Camera, ChevronLeft } from "lucide-react";

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100 "
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar á timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-5 w-5" />
            Anexar mídia
          </label>

          <label
            htmlFor="isPublic"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input type="checkbox" name="isPublic" id="isPublic" value="true" className="h-4 w-4 roundend border-gray-400 bg-gray-700 text-purple-500"/>
            Tornar memória pública
          </label>
        </div>
        <input type="file" id="media" className="invisible h-0 w-0" />

        <textarea name="content" spellCheck={false} className="w-full resize-none roundend border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-transparent"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."/>
      </form>
    </div>
  );
}
