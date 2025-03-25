import { useGetCards } from "@/api/queries/cards";
import TierFilter from "./components/tier-filter";
import TypeFilter from "./components/type-filter";
import { useState } from "react";

export default function Cards() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTier, setSelectedTier] = useState(null);

  const { data, isLoading, error } = useGetCards(selectedTier, selectedType);

  console.log("API Response:", data);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold pb-20">
        Battlegrounds Cards
      </h1>

      <TypeFilter
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <TierFilter
        selectedTier={selectedTier}
        setSelectedTier={setSelectedTier}
      />

      {isLoading && <p className="text-center">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">Error: {error.message}</p>
      )}

      <div className="grid grid-cols-4 gap-4">
        {data?.cards?.length > 0
          ? data?.cards?.map((card) => (
              <img
                key={card.id}
                src={card.battlegrounds.image}
                alt={card.name}
              />
            ))
          : !isLoading && (
              <p className="text-center col-span-4">No cards found.</p>
            )}
      </div>
    </div>
  );
}
