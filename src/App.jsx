import React from "react";
import { useState } from "react";
import { MiApi } from "./components/MiApi";
import { Buscador } from "./components/Buscador";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <h1 className="tittle">Bienvenido A FakeStore</h1>
      <Buscador search={search} setSearch={setSearch} />
      <MiApi search={search} />
    </>
  );
}

export default App;
