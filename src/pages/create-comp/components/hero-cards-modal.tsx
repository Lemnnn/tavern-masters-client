import { useGetHeroCards } from "@/api/queries/cards";
import SelectCardModal from "@/components/shared/select-card-modal";

interface HeroCardsModalProps {
  selectedCards: string[];
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function HeroCardsModal({
  selectedCards,
  setSelectedCards,
}: HeroCardsModalProps) {
  const { data, isLoading, error } = useGetHeroCards();

  return (
    <SelectCardModal
      cards={data?.data.cards || []}
      isLoading={isLoading}
      error={error}
      selectedCards={selectedCards}
      setSelectedCards={setSelectedCards}
      showTypeFilter={false}
      showTierFilter={false}
    />
  );
}
