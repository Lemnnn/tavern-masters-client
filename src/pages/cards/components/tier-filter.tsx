import { cn } from "@/lib/utils";

const tierFilter = [
  {
    id: 1,
    filter: "Tier 1",
  },
  {
    id: 2,
    filter: "Tier 2",
  },
  {
    id: 3,
    filter: "Tier 3",
  },
  {
    id: 4,
    filter: "Tier 4",
  },
  {
    id: 5,
    filter: "Tier 5",
  },
  {
    id: 6,
    filter: "Tier 6",
  },
  {
    id: 7,
    filter: "Tier 7",
  },
];

export default function TierFilter({ selectedTier, setSelectedTier }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-5 border-b-4 border-white pb-10">
      <div className="flex items-center gap-3">
        <div className="border-b-2 w-[50px]" />
        <p className="text-center">CARD TIER</p>
        <div className="border-b-2  w-[50px]" />
      </div>
      <div className="flex gap-4 mb-4 flex-1 justify-center items-center">
        {tierFilter.map((tier) => (
          <button
            key={tier.id}
            onClick={() => setSelectedTier(tier.id)}
            className={cn(
              "px-4 py-2 rounded-sm text-sm font-medium transition-all border-2 border-white",
              "focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-white",
              selectedTier === tier.id
                ? " backdrop-blur-lg bg-white text-black"
                : "hover:bg-foreground/5 text-foreground/80"
            )}
          >
            {tier.filter}
          </button>
        ))}
      </div>
    </div>
  );
}
