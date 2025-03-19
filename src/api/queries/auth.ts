import { useMutation, useQuery } from "@tanstack/react-query";
import { TLogin, TRegister } from "../../schemas/auth";
import { getMe, login, logout, register } from "../services/auth";
import { queryClient } from "../../App";
import { QUERY_KEYS } from "../query-keys";

export function useRegisterUser() {
  return useMutation({
    mutationFn: async (credentials: TRegister) => register(credentials),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useLoginUser() {
  return useMutation({
    mutationFn: async (credentials: TLogin) => login(credentials),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useGetMe() {
  return useQuery({
    queryFn: getMe,
    queryKey: [QUERY_KEYS.GET_AUTHENTICATED_USER],
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useLogout() {
  return useMutation({
    mutationFn: logout,
    mutationKey: [QUERY_KEYS.GET_AUTHENTICATED_USER],
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
