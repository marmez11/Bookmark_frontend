import { useLoaderData, Link } from "react-router-dom"

function Header(props) {
  const book = useLoaderData()

return (
  <div className="addBook_body2">
    <h2>My Bookmarks</h2>
    <Link to="/">
        <div>Bookmark App (Home Page)</div>
      </Link>
    {book.map(book => (
      <div key={book._id} className="nav_book">
      <Link to={`${book._id}`}>
        <div>{`${book.title}`} Bookmark Update by ID (Update Page)</div>
      </Link>
      </div>
    ))}
  </div>
)
}

export default Header