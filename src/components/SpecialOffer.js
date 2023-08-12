import React, { useState } from "react";
import PetsCard from "./PetsCard";
import Heading from "./Heading";

const SpecialOffer = () => {
  const [pet, setPet] = useState([
    {
      id: 10,
      image: "10",
      name: "Bateroid",
      price: "₹5,999/-",
    },
    {
      id: 11,
      image: "11",
      name: "Spotted boxfish",
      price: "₹1,999/-",
    },
    {
      id: 12,
      image: "12",
      name: "Ragdol",
      price: " ₹11,999/-",
    },
    {
      id: 13,
      image: "13",
      name: "Poddle",
      price: "₹19,999/-",
    },
    {
      id: 14,
      image: "14",
      name: "Beagle",
      price: "₹14,299/-",
    },
    {
      id: 15,
      image: "15",
      name: "Dolmation",
      price: "₹24,599/-",
    },
  ]);
  return (
    <section className="w-5/10 mx-auto">

      {/* Heading */}
      <Heading title="Special Offer" />
      <div className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-10 my-10">
        {pet.map((pet) => {
          return <PetsCard key={pet.id} pet={pet} />;
        })}
      </div>
    </section>
  );
};

export default SpecialOffer;
