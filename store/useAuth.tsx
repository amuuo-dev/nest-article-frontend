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
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
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
  _hasHydrated: false,
  setHasHydrated: (state) => set({ _hasHydrated: state }),
});

const useAuth = create(
  persist(authStore, {
    name: "artizone-auth",
    onRehydrateStorage: () => (state) => {
      state?.setHasHydrated(true);
    },
  })
);

export default useAuth;
