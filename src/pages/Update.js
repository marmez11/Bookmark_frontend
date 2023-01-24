import { useLoaderData, Form } from "react-router-dom"

function Update(props) {
    const Recipe = useLoaderData()

    return (
        <div className="Recipe">
          <p><h2>Name of Recipe: </h2><input className="update_recipe_name" type="text" value="Enter the Name of the Recipe...." /></p>
            <br></br>
            <p><h2>Image of Recipe: </h2><input className="update_recipe_image" type="text" value="Enter the Url of the Recipe's Image...." /></p>
            <br></br>
            <p><h2>Ingredients of Recipe: </h2><input className="update_recipe_ingredients" type="text" value="Enter the Ingredients of the Recipe...." /></p>
            <br></br>
            <p><h2>Directions of Recipe: </h2><input className="update_recipe_directions" type="text" value="Enter the Directions of the Recipe...." /></p>
            <br></br>
        <Form action={`Recipe/${Recipe._id}`} method="post">
          <button class="update_recipe"><a href={`/Recipe`}>Update Recipe</a></button>
          <button class="update_recipe2"><input type="submit" value="Update Recipe"/></button>
        </Form>
        </div>
      )
    }
    
    export default Update