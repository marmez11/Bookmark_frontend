import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const recipe = useLoaderData()

  return (
    <div className="recipe_index_body">
      {recipe.map(recipes => (
        <div key={recipes._id} className="recipe_box">
          <h3>{recipes.name}</h3>
          <p id="recipe_index"><img href={`${recipes.image}`} alt="" /></p>
        </div>
      ))}
    </div>
  )
}

export default Index
