import React from "react";
// import { useProductsContext } from "../context/products_context";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Error from "./Error";
// import Loading from "./Loading";
// import Product from "./Product";

const SlidePage = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>
          FILM IS ONE OF THE THREE UNIVERSAL LANGUAGES, THE OTHER TWO:
          MATHEMATICS AND MUSIC
        </h2>
        <h3>- Frank Capra</h3>
        <div className="underline"></div>
      </div>
      {/* <div className="section-center featured">
        {featured.slice(0, 4).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div> */}
      {/* <Link to="/products" className="btn">
        all products
      </Link> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: black;
  .featured {
    font: 1000px;
    margin: 4rem auto;
    display: grid;
    gap: 3.5rem;
    img {
      height: 305px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default SlidePage;
