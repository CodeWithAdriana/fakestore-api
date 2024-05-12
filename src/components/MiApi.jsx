//esta va a ser el Mi Api
import React from "react";
import { useState, useEffect } from "react";
import { LandingPage } from "./LandingPage";

export const MiApi = ({ search, category }) => {
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
    productosAmostrar =
      category === ""
        ? productsApi
        : productsApi.filter((producto) => producto.category === category);
  } else {
    productosAmostrar = productsApi.filter(
      (producto) =>
        producto.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "" || producto.category === category)
    );
  }

  productosAmostrar.sort((a, b) => a.price - b.price);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {productosAmostrar
            .map((producto) => (
              <div
                key={producto.id}
                className="col-md-4 mb-4 d-flex align-items-stretch"
              >
                <div className="card">
                  <img
                    src={producto.image}
                    className="card-img-top"
                    alt={producto.title}
                  />
                  <hr />
                  <div className="card-body">
                    <h3 className="card-title">{producto.title}</h3>
                    <p className="card-text"> Precio: ${producto.price}</p>
                    <p className="card-category">
                      Categoria: {producto.category}{" "}
                    </p>
                    <button className="btn btn-primary">
                      Anadir al Carrito
                    </button>
                  </div>
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
      </div>
    </>
  );
};
