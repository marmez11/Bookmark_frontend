import { Form, Link, useLoaderData } from "react-router-dom"

function Create(props) {
  const recipe = useLoaderData()

  return (
    <div className="recipe_Create_body">
            <p><h2>Name of Recipe: </h2><input type="text" value="Enter the Name of the Recipe...." /></p>
            <br></br>
            <p><h2>Image of Recipe: </h2><input type="text" value="Enter the Url of the Recipe's Image...." /></p>
            <br></br>
            <p><h2>Ingredients of Recipe: </h2><input type="text" value="Enter the Ingredients of the Recipe...." /></p>
            <br></br>
            <p><h2>Directions of Recipe: </h2><input type="text" value="Enter the Directions of the Recipe...." /></p>
            <br></br>
            <button class="create_recipe_index_btn"><a href="/Recipe">Create Recipe</a></button>
            <button class="create_recipe_index_btn2"><input type="submit" value="Create Recipe"/></button>
    </div>
  )}

export default Create