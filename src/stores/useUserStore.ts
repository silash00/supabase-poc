import { create } from "zustand";
import { supabase } from "../lib/supabase";

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

interface UserStore {
  users: User[];
  isLoading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  addUser: (user: Omit<User, "id" | "created_at">) => Promise<void>;
  updateUser: (id: number, userData: Partial<User>) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  isLoading: false,
  error: null,

  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from("user")
        .select("id, name, email, created_at")
        .order("created_at", { ascending: false });

      if (error) throw error;
      set({ users: data || [], isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  addUser: async (user) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from("user")
        .insert([user])
        .select();

      if (error) throw error;
      set((state) => ({
        users: [data[0], ...state.users],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  updateUser: async (id, userData) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from("user")
        .update(userData)
        .eq("id", id)
        .select();

      if (error) throw error;
      set((state) => ({
        users: state.users.map((user) =>
          user.id === id ? { ...user, ...data[0] } : user
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  deleteUser: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const { error } = await supabase.from("user").delete().eq("id", id);

      if (error) throw error;
      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
}));
