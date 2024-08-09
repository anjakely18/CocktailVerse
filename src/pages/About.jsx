import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cocktail from "../assets/img/cocktail.png";

const About = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={cocktail} alt="cocktail" />
      </div>

      <div className="heading">
        <p>
          Welcome to CocktailVerse, your ultimate destination for all things
          cocktails! At CocktailVerse, we believe that every cocktail tells a
          story, and we are here to help you discover and craft the perfect
          cocktail for every occasion. Whether you are a seasoned mixologist or
          a curious beginner, our extensive database offers a diverse range of
          cocktail recipes that cater to all tastes and preferences. From
          classic concoctions to innovative creations, each recipe is
          meticulously curated to ensure you have the best mixology experience.
          Join us on this delightful journey and let's raise a glass to the art
          of cocktails!
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  .text-container {
    display: flex;
    align-items: center;
  }

  img {
    height: 90%;
  }

  p {
    color: var(--color-accent);
    font-family: "Libre Baskerville", serif;
    line-height: 1.6;
    font-size: 1.3rem;
    text-align: justify;
  }

  @media (max-width: 1450px) {
    flex-direction: column; /* Sur les petits écrans, passe en colonne (column) */
    padding: 1rem; /* Réduit le padding pour les petits écrans */

    .img-container,
    .text-container {
      height: auto; /* Laisse les conteneurs s'ajuster en hauteur */
      width: auto; /* S'assure que chaque conteneur prend toute la largeur disponible */
    }

    img {
      width: 100%;
      height: auto; /* Ajuste l'image pour qu'elle soit responsive */
    }

    p {
      font-size: 1rem; /* Taille du texte sur petits écrans */
    }
  }
`;

export default About;
