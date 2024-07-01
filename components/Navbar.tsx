"use client";

import { CartContext } from "@/app/cart-provider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Navbar = () => {
  const cart = useContext(CartContext);

  return (
    <div className="navbar bg-base-300 rounded flex justify-center">
      <div className="flex w-full max-w-[1000px] justify-between">
        <Link href="/">
          <Image src="/images/logo.png" alt="Album" width={120} height={120} />
        </Link>
        <Link href="/penztar" className="flex">
          <Image
            src="/images/cart-line-icon.svg"
            alt="Cart"
            width={40}
            height={40}
          />
          {cart?.items.reduce((sum, current) => sum + current.quantity, 0) !=
            0 && (
            <span className="badge badge-primary font-bold absolute ml-8">
              {cart?.items.reduce((sum, current) => sum + current.quantity, 0)}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
