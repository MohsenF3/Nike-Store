import React from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

const CartCount = ({ onCartToggle, onClearCartItems }) => {
  return (
    <>
      <div className="bg-white h-12 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <div
          className="grid items-center cursor-pointer"
          onClick={onCartToggle}
        >
          <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
        </div>

        <div className="flex items-center">
          <button
            type="button"
            onClick={onClearCartItems}
            className="rounded bg-theme-cart text-white active:scale-90 py-1 px-3"
          >
            CLear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
