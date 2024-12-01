"use client";
import NavBar from "@/components/header/nav-bar";
import ShoppingCart from "@/components/section/user-cart-section/user-cart-section";

const page = () => {
  return (
    <div>
      <NavBar className="bg-black" />
      <div className="">
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
};

export default page;
