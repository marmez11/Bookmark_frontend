import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const recipe = useLoaderData()

    return (
      <div className="recipe_show_body">
      <p><img href={`${recipe.image}`} alt="" /> &emsp; <h1>{recipe.name}</h1></p> 
      <br></br>
      <input className="Recipe_info_txtbox1" type="text" />
      <br></br>
      <input className="Recipe_info_txtbox2" type="text" />
      <br></br>
      
      <button class="show_recipe_index_btn"><a href="/Recipe">Edit Recipe</a></button>
      <button class="show_recipe_index_btn2"><input type="submit" value="Edit Recipe"/></button>
      <button class="show_recipe_index_btn_1"><a href="/Recipe">Delete Recipe</a></button>
      <button class="show_recipe_index_btn2_1"><input type="submit" value="Delete Recipe"/></button>
</div>
      )
    }
    
    export default Show