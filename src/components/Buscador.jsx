// aqui tengo que crear un buscador, tal vez pasar el search de miapi.jsx
import React from "react";

export function Buscador({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Busca Aqui..."
    />
  );
}
