import React from "react";
import CocktailCard from "./CocktailCard";
import styled from "styled-components";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No matching cocktails found</h4>;
  }
  return (
    <Wrapper>
      {drinks.map((drink) => (
        <CocktailCard key={drink.idDrink} {...drink} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export default CocktailList;
