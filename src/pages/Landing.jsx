import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SearchForm from "./SearchForm";
import CocktailList from "./CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "";
  try {
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { drinks: response.data.drinks, searchTerm };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Failed to load data", { status: 500 });
  }
};
const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
