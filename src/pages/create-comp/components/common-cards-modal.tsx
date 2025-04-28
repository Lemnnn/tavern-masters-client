import { useGetCommonCards } from "@/api/queries/cards";
import SelectCardModal from "@/components/shared/select-card-modal";
import { useState } from "react";

interface CommonCardsModalProps {
  selectedCards: string[];
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function CommonCardsModal({
  selectedCards,
  setSelectedCards,
}: CommonCardsModalProps) {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTier, setSelectedTier] = useState("1,2,3,4,5,6,7");

  const { data, isLoading, error } = useGetCommonCards(
    selectedTier,
    selectedType
  );

  console.log("Common cards data", data);

  return (
    <SelectCardModal
      cards={data?.data.cards || []}
      isLoading={isLoading}
      error={error}
      selectedCards={selectedCards}
      setSelectedCards={setSelectedCards}
      selectedType={selectedType}
      setSelectedType={setSelectedType}
      selectedTier={selectedTier}
      setSelectedTier={setSelectedTier}
      showTypeFilter={true}
      showTierFilter={true}
    />
  );
}
