import React from "react";

const PetsCard = ({ pet }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl relative group transform hover:scale-105 duration-200">
      <img
        className="object-cover"
        src={require(`../Assets/${pet.image}.avif`)}
        alt={`${pet.image}`}
      />
      <div className="flex flex-col items-center text-base p-1 font-body text-slate-500">
        <span>{pet.name}</span>
        <span>{pet.price}</span>
        <span className="text-xs text-lime-400 invisible group-hover:visible">
          ADD TO CART
        </span>
      </div>

      <span className="absolute right-4 top-4 border border-1-grey bg-stone-100 rounded-md p-1 text-xs">
        Limited
      </span>
      <span className="absolute left-4 top-4 invisible group-hover:visible border border-1-grey bg-stone-100 rounded-md p-1 text-xs">
        1% off
      </span>
    </div>
  );
};

export default PetsCard;
