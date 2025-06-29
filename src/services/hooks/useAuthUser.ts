import { useMutation } from "@tanstack/react-query";
import { authService } from "../../services/auth";
import { useDispatch } from "react-redux";
import { setUser, logout } from "../../features/auth/authSlice";
import type { IUser } from "../../interface/auth";

export const useAuthUserMutation = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: () => authService.me(),
    onSuccess: (data: IUser) => {
      dispatch(setUser(data));
    },
    onError: () => {
      dispatch(logout());
    },
  });
};
