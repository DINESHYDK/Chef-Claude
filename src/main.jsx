export default function Main() {
  const ingredients = ["Chicken", "Tomatoes", "Potatoes", "Onions"];

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    // Fixed parameter name
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
  }

  return (
    <>
      <main>
        <form onSubmit={handleSubmit} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="New Ingredient"
            name="ingredient"
          />
          <button>+ Add ingredient</button>
        </form>

        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list">{ingredientsListItems}</ul>
        </section>
      </main>
    </>
  );
}
