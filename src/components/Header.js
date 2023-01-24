import { useLoaderData, Link } from "react-router-dom"

function Header(props) {
  const recipe = useLoaderData()

return (
  <div className="recipe_body">
    <Link to="/">
        <div>Home</div>
      </Link>
      <Link to={`/Recipe/create`}>
        <div>Create</div>
      </Link>
      <h2>Team 10's Cookbook</h2>
  </div>
)
}

export default Header