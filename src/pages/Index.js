import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const book = useLoaderData()

  return (

    <div className="addBook_body">
    <div className="center-screen">

      <h2>Add a Bookmark</h2>
      <Form action="/create" method="post" className="addBook">
        <input type="input" name="title" placeholder="Site Name" />
        <input type="input" name="url" placeholder="URL" />
        <input type="submit" value="Add Book" />
      </Form>

      <h2>My Bookmarks</h2>
      {book.map(book => (
        <div key={book._id} className="book">
          
          <p id="bookmark_update"><a href={`/show/${book._id}`}><b><em>{`"${book.title}" Bookmark`}</em></b></a></p>

          <Link to={`/${book._id}`}>Update {book.title} URL
          </Link>

          <Link to={`/delete/${book._id}`}>Delete {book.title}
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Index