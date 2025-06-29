import { api } from "./api";
import type { ISingIn } from "../interface/singIn";
import type { ISingUp } from "../interface/singUp";
import type { IToken, IUser } from "../interface/auth";

export const authService = {
  ISingIn: async (payload: ISingIn): Promise<IToken> =>
    api.post("login/", payload).then((res) => res.data),
  me: (): Promise<IUser> => api.get("me/").then((res) => res.data),
  ISingUp: async (payload: ISingUp): Promise<ISingUp> =>
    api.post("register/", payload).then((res) => res.data),
};
