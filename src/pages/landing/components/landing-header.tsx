import { Link } from "react-router-dom";

export default function LandingHeader() {
  return (
    <div className="h-[80px] sticky top-0 left-0 z-55 backdrop-blur-md bg-black/30">
      <div className="container mx-auto flex items-center justify-between h-full px-10">
        <Link to="/" className="text-3xl font-bold">
          Tavern Masters
        </Link>

        <div className="flex items-center justify-between gap-10">
          <Link
            to="/login"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-primary text-black hover:bg-primary/80 active:bg-primary/75 transition-colors duration-300 ease-in-out"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}
