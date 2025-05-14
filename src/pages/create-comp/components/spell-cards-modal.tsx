import { useGetSpellCards } from "@/api/queries/cards";
import SelectCardModal from "@/components/shared/select-card-modal";
import { useState } from "react";

interface SpellCardsModalProps {
  selectedCards: string[];
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SpellCardsModal({
  selectedCards,
  setSelectedCards,
}: SpellCardsModalProps) {
  const [selectedTier, setSelectedTier] = useState("1,2,3,4,5,6,7");

  const { data, isLoading, error } = useGetSpellCards(selectedTier);

  return (
    <SelectCardModal
      cards={data?.data.cards || []}
      isLoading={isLoading}
      error={error}
      selectedCards={selectedCards}
      setSelectedCards={setSelectedCards}
      selectedTier={selectedTier}
      setSelectedTier={setSelectedTier}
      showTypeFilter={false}
      showTierFilter={true}
    />
  );
}
