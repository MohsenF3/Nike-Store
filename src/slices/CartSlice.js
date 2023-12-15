import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [], // Let Suppose Database
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to set the cart state as open
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    // Action to set the cart state as closed
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    // Action to add an item to the cart
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // Check if the item is already in the cart
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Item QTY Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to Cart`);
      }

      // Update localStorage with the updated cart items
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // Action to remove an item from the cart
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} Removed From Cart`);
    },

    // Action to increase the quantity of an item in the cart
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // Check if the item is in the cart
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Item QTY Increased`);
      }

      // Update localStorage with the updated cart items
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // Action to decrease the quantity of an item in the cart
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // Check if the item is in the cart and its quantity is greater than 1
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.success(`Item QTY Decreased`);
      }

      // Update localStorage with the updated cart items
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // Action to clear all items from the cart
    setClearCartItems: (state) => {
      state.cartItems = [];
      toast.success(`Cart Cleared`);

      // Update localStorage with the cleared cart items
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // Action to calculate and set the total amount and quantity of items in the cart
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      // Update state with the calculated total amount and quantity
      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;

export default CartSlice.reducer;
