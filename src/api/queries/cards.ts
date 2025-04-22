import { useQuery } from "@tanstack/react-query";
import { getCommonCards, getHeroCards, getSpellCards } from "../services/cards";
import { QUERY_KEYS } from "../query-keys";

export function useGetCommonCards(selectedTier: string, selectedType: string) {
  return useQuery({
    queryFn: () => getCommonCards(selectedTier, selectedType),
    queryKey: [QUERY_KEYS.GET_BATTLEGROUND_CARDS, selectedTier, selectedType],
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useGetHeroCards() {
  return useQuery({
    queryFn: () => getHeroCards(),
    queryKey: [QUERY_KEYS.GET_BATTLEGROUND_CARDS],
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useGetSpellCards(selectedTier: string) {
  return useQuery({
    queryFn: () => getSpellCards(selectedTier),
    queryKey: [QUERY_KEYS.GET_BATTLEGROUND_CARDS, selectedTier],
    refetchOnWindowFocus: false,
    retry: false,
  });
}
