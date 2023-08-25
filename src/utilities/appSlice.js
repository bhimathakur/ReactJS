import {createSlice} from '@reduxjs/toolkit';


const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: false,
        showAll: 'All',
    },
    reducers: {
        openMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = true;
        },
        videoType: (state, action) => {
            state.showAll = action.payload;

        }
    },
})

export const {openMenu, closeMenu, videoType} = appSlice.actions;

export default appSlice.reducer;