//esta va a ser el Mi Api
import React from "react";
import { useState, useEffect } from "react";
import { LandingPage } from "./LandingPage";

export const MiApi = ({ search }) => {
  const [productsApi, setProductsApi] = useState([]);

  const totalProducts = productsApi.length;

  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const URL = "https://fakestoreapi.com/products";

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const MiApi = async () => {
    try {
      const data = await fetch(URL);
      const result = await data.json();
      setProductsApi(result);
    } catch (error) {
      console.log("No trae datos");
    }
  };
  useEffect(() => {
    MiApi();
  }, []);
  let productosAmostrar = [];
  if (search === "") {
    productosAmostrar = productsApi;
  } else {
    productosAmostrar = productsApi.filter((producto) =>
      producto.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <>
      <div className="card">
        {productosAmostrar
          .map((producto) => (
            <div key={producto.id} className="card-product">
              <figure>
                <img
                  src={producto.image}
                  className="card-img-top"
                  alt={producto.title}
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{producto.title}</h3>
                <p className="card-text">$ {producto.price}</p>
                <button className="btn btn-primary"> Anadir al Carrito</button>
              </div>
            </div>
          ))
          .slice(firstIndex, lastIndex)}
      </div>
      <LandingPage
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </>
  );
};
