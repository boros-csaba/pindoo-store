"use client";

import { useContext } from "react";
import { CartContext } from "../cart-provider";

export default function PenztarPage() {
  const cart = useContext(CartContext);

  return (
    <div className="flex flex-wrap w-full max-w-[1000px] p-10 justify-around gap-10">
      <h1 className="text-4xl">Számlázási adatok</h1>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text font-bold">Email cím*</span>
        </div>
        <input type="text" className="input input-bordered w-full bg-white" />

        <div className="label">
          <span className="label-text font-bold">Vezetéknév*</span>
        </div>
        <input type="text" className="input input-bordered w-full bg-white" />

        <div className="label">
          <span className="label-text font-bold">Név*</span>
        </div>
        <input type="text" className="input input-bordered w-full bg-white" />

        <div className="label">
          <span className="label-text font-bold">Irányítószám*</span>
        </div>
        <input type="text" className="input input-bordered w-full bg-white" />

        <div className="label">
          <span className="label-text font-bold">Város*</span>
        </div>
        <input type="text" className="input input-bordered w-full bg-white" />

        <div className="label">
          <span className="label-text font-bold">Utca, házszám*</span>
        </div>
        <input type="text" className="input input-bordered w-full bg-white" />

        <div className="label">
          <span className="label-text font-bold">Telefonzám*</span>
        </div>
        <input type="text" className="input input-bordered w-full bg-white" />

        <div className="label">
          <span className="label-text font-bold">Megjegyzés</span>
        </div>
        <textarea className="textarea textarea-bordered w-full bg-white" />
      </label>
    </div>
  );
}
