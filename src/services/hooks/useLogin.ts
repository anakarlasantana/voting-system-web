import { useMutation } from "@tanstack/react-query";
import type { ISingUp } from "../../interface/singUp";
import { authService } from "../auth";
import type { ISingIn } from "../../interface/singIn";

export const useISingIn = () => {
  return useMutation({
    mutationFn: (data: ISingIn) => authService.ISingIn(data),
  });
};

export const useISingUp = () => {
  return useMutation({
    mutationFn: (data: ISingUp) => authService.ISingUp(data),
  });
};
