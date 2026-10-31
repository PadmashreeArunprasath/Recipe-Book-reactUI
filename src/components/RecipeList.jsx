import RecipeCard from "./RecipeCard";

function RecipeList({
  recipes,
  favorites,
  onFavorite,
  onSelect,
  selectedRecipe
}) {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          favorite={favorites.includes(recipe.id)}
          onFavorite={onFavorite}
          onSelect={onSelect}
          selected={selectedRecipe?.id === recipe.id}
        />
      ))}
    </div>
  );
}

export default RecipeList;
