import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CocktailCard = ({
  idDrink,
  strDrinkThumb,
  strDrink,
  strGlass,
  strAlcoholic,
}) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink} className="img" />
      </div>
      <div className="footer">
        <h4>{strDrink}</h4>
        <h5>{strGlass}</h5>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  /* background: white; */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: 0.3s ease-in-out all;
  border: 2px solid var(--color-primary);

  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 0.25rem;
  :hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .img {
    height: 15rem;
    width: 100%;
    border-top-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .footer {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h4,
    h5 {
      margin-bottom: 0.5rem;
      text-transform: capitalize;
    }
    h4 {
      font-weight: 700;
      font-family: "Libre Baskerville", serif;
    }
    p {
      margin-bottom: 1rem;
    }
  }
`;

export default CocktailCard;
