import { create } from "zustand";
import { Command } from "../@types/command.type";

type AppStoreState = {
  addModal: boolean;
  editModal: boolean;
  deleteModal: boolean;
  selectedCommand: Command | null;
  showAddModal: () => void;
  hideAddModal: () => void;
  showEditModal: () => void;
  hideEditModal: () => void;
  showDeleteModal: () => void;
  hideDeleteModal: () => void;
};

export const appStore = create<AppStoreState>((set) => ({
  addModal: false,
  editModal: false,
  deleteModal: false,
  selectedCommand: null,
  showAddModal: () => set({ addModal: true }),
  hideAddModal: () => set({ addModal: false }),
  showEditModal: () => set({ editModal: true }),
  hideEditModal: () => set({ editModal: false }),
  showDeleteModal: () => set({ deleteModal: true }),
  hideDeleteModal: () => set({ deleteModal: false }),
}));
