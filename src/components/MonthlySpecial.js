import React, { useState } from "react";
import PetsCard from "./PetsCard";
import Heading from "./Heading";

const MonthlySpecial = () => {
  const [pet, setPet] = useState([
    {
      id: 16,
      image: "16",
      name: "Minature Aquariam",
      price: " From ₹999/- Onwards",
    },
    {
      id: 17,
      image: "17",
      name: "Fish Bowl",
      price: "₹499/-",
    },
    {
      id: 18,
      image: "18",
      name: "Pet Toys",
      price: "From ₹299/- Onwards",
    },
  ]);
  return (
    <section className="w-5/10 mx-auto">
      <Heading title={"monthly special"} />
      <div className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-10 my-10">
        {pet.map((pet) => {
          return <PetsCard key={pet.id} pet={pet} />;
        })}
      </div>
    </section>
  );
};

export default MonthlySpecial;
