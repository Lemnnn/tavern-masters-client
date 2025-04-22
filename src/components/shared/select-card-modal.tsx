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
import { Card } from "@/types/types";

interface SelectCardModalProps {
  cards: Card[];
  isLoading: boolean;
  error: Error | null;
  selectedCards: string[];
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>;
  selectedType?: string;
  setSelectedType?: React.Dispatch<React.SetStateAction<string>>;
  selectedTier?: string;
  setSelectedTier?: React.Dispatch<React.SetStateAction<string>>;
  showTypeFilter?: boolean;
  showTierFilter?: boolean;
}

export default function SelectCardModal({
  cards,
  isLoading,
  error,
  selectedCards,
  setSelectedCards,
  selectedType,
  setSelectedType,
  selectedTier,
  setSelectedTier,
  showTypeFilter = true,
  showTierFilter = true,
}: SelectCardModalProps) {
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
        <button className="flex items-center justify-center px-4 py-2 text-white hover:cursor-pointer">
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
          {showTypeFilter && selectedType !== undefined && setSelectedType && (
            <TypeFilter
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />
          )}

          {showTierFilter && selectedTier !== undefined && setSelectedTier && (
            <TierFilter
              selectedTier={selectedTier}
              setSelectedTier={setSelectedTier}
            />
          )}

          {isLoading && <p className="text-center">Loading...</p>}
          {error && (
            <p className="text-center text-red-500">Error: {error.message}</p>
          )}

          <div className="grid grid-cols-6 gap-4">
            {cards && cards.length > 0
              ? cards.map((card: Card) => (
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

        <DialogFooter className="flex justify-between items-center gap-10">
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
