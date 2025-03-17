import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="mt-12 flex flex-col items-center w-full gap-32">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mt-4 max-w-3xl leading-14">
          The place to create and share{" "}
          <span className="font-bold text-accent underline">your</span>{" "}
          Heartstone Battlegrounds comps.
        </h1>
        <h2 className="text-center text-foreground/60 text-sm md:text-lg max-w-[500px] font-normal">
          <span className="font-bold text-accent underline">
            Tavern Masters
          </span>
          , make your comps be known by everybody.
        </h2>

        <div className="mt-8">
          <Link
            to="/login"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-md font-semibold bg-primary text-black hover:bg-primary/80 active:bg-primary/75 transition-colors duration-300 ease-in-out group"
          >
            <p>Try for free</p>
            <ArrowRight className="inline-block w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
          </Link>
        </div>
      </div>
    </div>
  );
}
