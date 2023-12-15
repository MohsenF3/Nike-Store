import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../slices/CartSlice";

import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

import { logout } from "../slices/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);
  const { userInfo } = useSelector((state) => state.auth);

  // Function to handle logout
  const logoutHandler = () => {
    if (window.confirm("Are You Sure You Want To Logout?")) {
      dispatch(logout());
      toast.success("Logout Was successfully");
      location.pathname = "/";
    }
  };

  // Function to open the cart
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  // Function to handle navigation bar scroll behavior
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            {userInfo ? (
              <>
                <li>
                  <button
                    onClick={logoutHandler}
                    className="bg-white text-gray-800 px-5 py-1 rounded-full"
                  >
                    Logout
                  </button>
                </li>
                <li className="grid items-center">
                  <button
                    type="button"
                    onClick={onCartToggle}
                    className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                  >
                    <ShoppingBagIcon
                      className={`icon-style ${
                        navState && "text-slate-900 transition-all duration-300"
                      }`}
                    />
                    <div
                      className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                        navState
                          ? "bg-slate-900 text-slate-100 shadow-slate-900"
                          : "bg-slate-100 text-slate-900 shadow-slate-100"
                      }`}
                    >
                      {totalQTY}
                    </div>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="bg-white text-gray-800 px-5 py-1 rounded-full"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="bg-white text-gray-800 px-5 py-1 rounded-full"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
