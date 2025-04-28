import { queryClient } from "@/App";
import { TCreateComp } from "@/schemas/comps";
import { useMutation } from "@tanstack/react-query";
import { createComp } from "../services/comps";

export function useCreateComp() {
  return useMutation({
    mutationFn: async (compData: TCreateComp) => createComp(compData),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
