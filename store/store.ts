import { create } from "zustand";

interface FormData {
  id: number;
  name: string;
  email: string;
  age: string;
}

interface FormState {
  formData: FormData[];
  submitForm: (data: FormData) => void;
}

export const useStore = create<FormState>((set) => ({
  formData: [],
  submitForm: (data) =>
    set((state) => ({ formData: [...state.formData, data] })),
}));
