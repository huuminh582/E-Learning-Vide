import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AlertState {
  type: 'success' | 'error' | 'warning' | 'info' | null;
  message: string | null;
  duration?: number;
}

const initialState: AlertState = {
  type: null,
  message: null,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<AlertState>) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.duration = action.payload.duration || 3000;
    },
    hideAlert: (state) => {
      state.type = null;
      state.message = null;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
