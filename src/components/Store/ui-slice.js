import { createSlice } from '@reduxjs/toolkit';
/*Esta es la accion que va desencadenar el dispatch */
const uiSlice = createSlice({
    name: "ui",
    initialState: { cartIsVisible: false },
    /* 
    Crea un nuevo objeto de estado, en vez de manipular al existente.
     */
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;