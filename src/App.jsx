import React from "react";
import { useState } from "react";
import { MiApi } from "./components/MiApi";
import { Buscador } from "./components/Buscador";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg bg">
        <div className="container-fluid">
          <h1 className="navbar-brand">Bienvenido A FakeStore</h1>
          <div className="d-flex">
            <Buscador
              search={search}
              setSearch={setSearch}
              setCategory={setCategory}
            />
          </div>
        </div>
      </nav>
      <MiApi search={search} category={category} />
    </>
  );
}

export default App;
