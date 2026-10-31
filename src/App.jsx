
import { useState } from "react";
import Hero from "./components/Hero";
import FilterButtons from "./components/FilterButton";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";
import recipes from "./data/recipes.json";


function App() {
  const [category, setCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);
  const [favorites, setFavorites] = useState([1, 4]);

  const filteredRecipes =
    category === "All"
      ? recipes
      : recipes.filter(
          (recipe) => recipe.category === category
        );

  function toggleFavorite(id) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  return (
    <div className="app">
      <Hero />

      <main className="container">
        <FilterButtons
          category={category}
          setCategory={setCategory}
        />

        <h2 className="section-title">
          {category === "All" ? "All recipes" : `${category} recipes`}
        </h2>

        <RecipeList
          recipes={filteredRecipes}
          favorites={favorites}
          onFavorite={toggleFavorite}
          onSelect={setSelectedRecipe}
          selectedRecipe={selectedRecipe}
        />

        <RecipeDetails recipe={selectedRecipe} />
      </main>
    </div>
  );
}

export default App;

