import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">CocktailVerse</span>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="about">
            About
          </NavLink>
          <NavLink className="nav-link" to="newsletter">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--color-background);
  .nav-center {
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
  }

  .logo {
    font-family: "Great Vibes", cursive;
    font-size: 3rem;
    color: var(--color-primary);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .nav-link {
    color: var(--color-accent);
    text-decoration: none;
    padding: 0.5rem 0.5rem 0.5rem 0;
    font-family: "Libre Baskerville", serif;
    letter-spacing: 1px;
    font-size: 1.2rem;
  }
  .nav-link:hover {
    color: var(--color-secondary);
  }
  .active {
    color: var(--color-secondary);
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Navbar;
