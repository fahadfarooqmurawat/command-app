import { create } from "zustand";

export const appStore = create((set) => ({
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
