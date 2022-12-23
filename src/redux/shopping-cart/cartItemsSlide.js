import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const initialState = {
    value: items,
};

export const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const duplicate = state.value.filter(
                (e) => e.slug === newItem.slug && e.size === newItem.size
            );
            if (duplicate.length > 0) {
                state.value = state.value.filter(
                    (e) =>
                        e.slug !== newItem.slug ||
                        e.color !== newItem.color ||
                        e.size !== newItem.size
                );

                state.value = [
                    ...state.value,
                    {
                        id: duplicate[0].id,
                        image: newItem.image,
                        name: newItem.name,
                        discount: newItem.discount,
                        slug: newItem.slug,
                        size: newItem.size,
                        price: newItem.price,
                        designer: newItem.designer,
                        category: newItem.category,
                        quantity: newItem.quantity + duplicate[0].quantity,
                    },
                ];
            } else {
                state.value = [
                    ...state.value,
                    {
                        ...action.payload,
                        id:
                            state.value.length > 0
                                ? state.value[state.value.length - 1].id + 1
                                : 1,
                    },
                ];
            }
            localStorage.setItem(
                "cartItems",
                JSON.stringify(
                    state.value.sort((a, b) =>
                        a.id > b.id ? 1 : a.id < b.id ? -1 : 0
                    )
                )
            );
        },
        updateItem: (state, action) => {
            const newItem = action.payload;
            const item = state.value.filter(
                (e) =>
                    e.slug === newItem.slug &&                    
                    e.size === newItem.size
            );
            if (item.length > 0) {
                state.value = state.value.filter(
                    (e) =>
                        e.slug !== newItem.slug ||
                        e.size !== newItem.size
                );

                state.value = [
                    ...state.value,
                    {
                        id: item[0].id,
                        image: newItem.image,
                        name: newItem.name,
                        discount: newItem.discount,
                        slug: newItem.slug,
                        selectedSize: newItem.selectedSize,
                        price: newItem.price,
                        designer: newItem.designer,
                        category: newItem.category,
                        quantity: newItem.quantity,
                    },
                ];
            }
            localStorage.setItem(
                "cartItems",
                JSON.stringify(
                    state.value.sort((a, b) =>
                        a.id > b.id ? 1 : a.id < b.id ? -1 : 0
                    )
                )
            );
        },
        removeItem: (state, action) => {
            const item = action.payload;
            state.value = state.value.filter(
                (e) =>
                    e.slug !== item.slug ||
                    e.size !== item.size
            );

            localStorage.setItem(
                "cartItems",
                JSON.stringify(
                    state.value.sort((a, b) =>
                        a.id > b.id ? 1 : a.id < b.id ? -1 : 0
                    )
                )
            );
        },
        clearCart: (state, action) => {
            state.value = [];
            localStorage.removeItem("cartItems");
        },
    },
});

export const { addItem, removeItem, updateItem, clearCart } =
    cartItemsSlice.actions;

export default cartItemsSlice.reducer;
