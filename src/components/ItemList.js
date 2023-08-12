import React, { useState } from "react";
import PetsCard from "./PetsCard";

const ItemList = () => {
  const [pet, setPet] = useState([
    {
      id: 1,
      image: "1",
      name: "Golden Retriver",
      price: "₹14,999/-",
    },
    {
      id: 2,
      image: "2",
      name: "Serbian Husky",
      price: "₹29,999/-",
    },
    {
      id: 3,
      image: "3",
      name: "Pug",
      price: " ₹4,999/-",
    },
    {
      id: 4,
      image: "4",
      name: "Serbian Husky",
      price: "₹19,999/-",
    },
    {
      id: 5,
      image: "5",
      name: "Billi",
      price: "₹7,299/-",
    },
    {
      id: 6,
      image: "6",
      name: "Maine Coon",
      price: "₹4,599/-",
    },
    {
      id: 7,
      image: "7",
      name: "Exotic",
      price: "₹1,999/-",
    },
    {
      id: 8,
      image: "8",
      name: "Fighter Couples",
      price: "₹999/-",
    },
    {
      id: 9,
      image: "9",
      name: "Ocellaris clownfish",
      price: "₹4,500/-",
    },
  ]);

  return (
    <section className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-10 my-10">
      {pet.map((pet) => {
        return <PetsCard key={pet.id} pet={pet} />;
      })}
    </section>
  );
};

export default ItemList;
