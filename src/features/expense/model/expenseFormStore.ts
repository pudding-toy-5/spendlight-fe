import { create } from 'zustand';
import { ExpenseFormState, ExpenseFormActions } from './types';

const initialExpenseFormState: ExpenseFormState = {
  category: '',
  date: new Date(),
  memo: '',
  amount: 0,
};

export const useExpenseFormStore = create<
  ExpenseFormState & ExpenseFormActions
>((set) => ({
  ...initialExpenseFormState,
  setDate: (value) => {
    set({ date: value });
  },
  setCategory: (value) => {
    set({ category: value });
  },
  setMemo: (value) => {
    set({ memo: value });
  },
  setAmount: (value) => {
    set({ amount: value });
  },
  resetForm: () => {
    set({ ...initialExpenseFormState });
  },
}));
