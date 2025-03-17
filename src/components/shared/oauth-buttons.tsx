import { Album } from "lucide-react";

export default function OauthButtons() {
  return (
    <div className="mt-6 flex justify-center space-x-4">
      <button className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center hover:bg-zinc-700">
        <Album />
      </button>
      <button className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center hover:bg-zinc-700">
        <Album />
      </button>
      <button className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center hover:bg-zinc-700">
        <Album />
      </button>
    </div>
  );
}
