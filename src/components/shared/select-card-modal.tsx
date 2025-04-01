import { useGetCards } from "@/api/queries/cards";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Plus } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import TypeFilter from "@/pages/create-comp/components/type-filter";
import TierFilter from "@/pages/create-comp/components/tier-filter";

interface SelectCardModalProps {
  selectedCards: string[];
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SelectCardModal({
  selectedCards,
  setSelectedCards,
}: SelectCardModalProps) {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTier, setSelectedTier] = useState(null);

  const { data, isLoading, error } = useGetCards(selectedTier, selectedType);

  const toggleCardSelection = (image: string) => {
    setSelectedCards((prev) => {
      if (prev.includes(image)) {
        return prev.filter((card) => card !== image);
      } else if (prev.length < 7) {
        return [...prev, image];
      }
      return prev;
    });
  };

  const clearSelectedCards = () => {
    setSelectedCards([]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center px-4 py-2 bg-white text-black hover:bg-gray-300">
          <div className="flex items-center justify-center gap-1">
            <Plus size={20} />
            Add cards
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90%]">
        <DialogHeader>
          <DialogTitle>Add cards</DialogTitle>
          <DialogDescription>Select up to 7 core cards.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[500px] py-4">
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
              ? data.cards.map((card) => (
                  <img
                    key={card.id}
                    src={card.battlegrounds.image}
                    alt={card.name}
                    className={`cursor-pointer border-2 ${
                      selectedCards.includes(card.battlegrounds.image)
                        ? "border-green-500"
                        : "border-transparent"
                    }`}
                    onClick={() =>
                      toggleCardSelection(card.battlegrounds.image)
                    }
                  />
                ))
              : !isLoading && (
                  <p className="text-center col-span-4">No cards found.</p>
                )}
          </div>
        </ScrollArea>
        <DialogFooter className="flex justify-between">
          <p className="text-sm">Selected: {selectedCards.length} / 7</p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
              onClick={clearSelectedCards}
            >
              Clear All
            </button>
            <DialogClose asChild>
              <button className="px-4 py-2 bg-white text-black hover:bg-gray-300 rounded-lg">
                Submit cards
              </button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
