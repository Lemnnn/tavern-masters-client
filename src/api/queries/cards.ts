import { useQuery } from "@tanstack/react-query";
import { getCards } from "../services/cards";
import { QUERY_KEYS } from "../query-keys";

export function useGetCards(selectedTier: string, selectedType: string) {
  return useQuery({
    queryFn: () => getCards(selectedTier, selectedType),
    queryKey: [QUERY_KEYS.GET_BATTLEGROUND_CARDS, selectedTier, selectedType],
    refetchOnWindowFocus: false,
    retry: false,
  });
}
