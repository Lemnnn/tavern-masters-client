import { queryClient } from "@/App";
import { TCreateComp } from "@/schemas/comps";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createComp, getCompById, getMyComps } from "../services/comps";
import { QUERY_KEYS } from "../query-keys";

export function useCreateComp() {
  return useMutation({
    mutationFn: async (compData: TCreateComp) => createComp(compData),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useGetMyComps() {
  return useQuery({
    queryFn: () => getMyComps(),
    queryKey: [QUERY_KEYS.GET_MY_COMPS],
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useGetCompById(id: string) {
  return useQuery({
    queryFn: () => getCompById(id),
    queryKey: [QUERY_KEYS.GET_COMP_BY_ID, id],
    refetchOnWindowFocus: false,
    retry: false,
  });
}
