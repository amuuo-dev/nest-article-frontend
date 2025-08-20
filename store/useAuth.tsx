import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type UserProps = {
  id: number;
  username: string;
  email: string;
  password: string;
  image?: string;
  bio?: string;
};

type AuthStoreProps = {
  user: UserProps | null;
  token: string | null;
  setUser: (user: UserProps, token: string) => void;
  logOut: () => void;
};

const authStore: StateCreator<AuthStoreProps> = (set) => ({
  user: null,
  token: null,
  setUser: (user: UserProps, token: string) => {
    set(() => ({ user, token }));
  },
  logOut: () => {
    set(() => ({ user: null, token: null }));
  },
});

const useAuth = create(persist(authStore, { name: "artizone-auth" }));

export default useAuth;
