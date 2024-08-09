import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const loader = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(`${singleCocktailUrl}${id}`);
  return { data: response.data, id };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  if (!data) return <Navigate to="/" />;
  const singleDrink = data.drinks[0];

  const {
    strDrinkThumb: img,
    strDrink: name,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instruction,
  } = singleDrink;

  //Vérification si strIngredient !== null
  //ValidIngredients contiendra la liste des ingrédients qui existent
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back home
        </Link>
        <h3 className="title">{name}</h3>
      </header>
      <div className="drink">
        <div className="img-container">
          <img src={img} alt={name} className="img" />
        </div>
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span> {name}
          </p>
          <p>
            <span className="drink-data">category:</span> {category}
          </p>
          <p>
            <span className="drink-data">info:</span> {info}
          </p>
          <p>
            <span className="drink-data">glass:</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>{" "}
            {validIngredients.map((ingredient, index) => {
              return (
                <span key={ingredient}>
                  {ingredient} {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instruction:</span> {instruction}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Libre Baskerville", serif;
  display: flex;
  flex-direction: column;
  text-align: center;
  header {
    margin-bottom: 3rem;
  }

  .img-container {
    position: relative;
    display: inline-block;
    max-width: 100%;
    height: 40vh;
  }

  img {
    height: 100%;
    width: 100%;
  }

  .img-container::before {
    content: "";
    position: absolute;
    top: 30px;
    left: -30px;
    right: 30px;
    bottom: -30px;
    border: 4px solid var(--color-primary);
    z-index: -1;
  }

  .drink-info {
    padding-top: 3rem;
  }

  .drink p {
    text-transform: capitalize;
    line-height: 2;
    margin: 1rem;
    font-size: 1.3rem;
  }

  .drink-data {
    margin-right: 0.5rem;
    font-weight: 700;
  }

  @media screen and (min-width: 1450px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;
export default Cocktail;
