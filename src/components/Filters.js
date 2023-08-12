import React, { useState } from "react";

const Filters = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <section className="mt-12 py-5 w-3/6 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around font-body">
      <button
        onClick={() => setSelectedItem(1)}
        className={`btnStyle ${
          selectedItem === 1 ? `bg-green-500 text-white` : `text-slate-500`
        }`}
      >
        Latest
      </button>
      <button
        onClick={() => setSelectedItem(2)}
        className={`btnStyle ${
          selectedItem === 2 ? `bg-green-500 text-white` : `text-slate-500`
        }`}
      >
        Best Seller
      </button>
      <button
        onClick={() => setSelectedItem(3)}
        className={`btnStyle ${
          selectedItem === 3 ? `bg-green-500 text-white` : `text-slate-500`
        }`}
      >
        Special
      </button>
    </section>
  );
};

export default Filters;
