import { cn } from "@/lib/utils";

const typeFilter = [
  {
    id: 1,
    filter: "All",
  },
  {
    id: 2,
    filter: "Beast",
  },
  {
    id: 3,
    filter: "Mech",
  },
  {
    id: 4,
    filter: "Undead",
  },
  {
    id: 5,
    filter: "Demon",
  },
  {
    id: 6,
    filter: "Pirate",
  },
  {
    id: 7,
    filter: "Elemental",
  },
  {
    id: 8,
    filter: "Dragon",
  },
  {
    id: 9,
    filter: "Murloc",
  },
  {
    id: 10,
    filter: "Naga",
  },
  {
    id: 11,
    filter: "Quilboar",
  },
];

export default function TypeFilter({
  selectedType,
  setSelectedType,
}: {
  selectedType: string;
  setSelectedType: (type: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="border-b-2 w-[50px]" />
        <p className="text-center">CARD TYPE</p>
        <div className="border-b-2 w-[50px]" />
      </div>
      <div className="flex gap-4 mb-4 flex-1 justify-center items-center">
        {typeFilter.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.filter)}
            className={cn(
              "px-4 py-2 rounded-sm text-sm font-medium transition-all border-2 border-white",
              "focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-white",
              selectedType === type.filter
                ? "backdrop-blur-lg bg-white text-black"
                : "hover:bg-foreground/5 text-foreground/80"
            )}
          >
            {type.filter}
          </button>
        ))}
      </div>
    </div>
  );
}
