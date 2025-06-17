export default function Main() {
  return (
    <>
      <main>
        <form className="add-ingredient-form">
          <input 
          type="text" 
          placeholder="e.g. Onions"
          aria-label="New Ingredient"
          />
          <button>Add Ingredient</button>
        </form>
      </main>
    </>
  );
}
