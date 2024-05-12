// aqui tengo que crear un buscador, tal vez pasar el search de miapi.jsx
import React from "react";

export function Buscador({ search, setSearch, setCategory }) {
  return (
    <>
      <select
        onChange={(e) => setCategory(e.target.value)}
        defaultValue=""
        className="select-style"
      >
        <option value="" className="all">
          All
        </option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Busca Aqui..."
      />
    </>
  );
}
