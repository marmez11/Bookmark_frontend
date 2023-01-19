import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const book = useLoaderData()

  return (
    <div>
      <h2>Add a Bookmark</h2>
      <Form action="/create" method="post" className="addBook">
        <input type="input" name="title" placeholder="Site Name" />
        <input type="input" name="url" placeholder="URL" />
        <input type="submit" value="Add Book" />
      </Form>

      <h2>My Bookmarks</h2>
      {book.map(book => (
        <div key={book._id} className="book">
          <a href={`https://${book.url}`}>
            <h1>{book.title}</h1>
          </a>
          <Link to={`/${book._id}`}>Update {book.title} URL
          </Link>
          <Form action={`/delete/${book._id}`} method="post">
        <input type="submit" value={`Delete ${book.title}`} />
      </Form>
        </div>
      ))}
    </div>
  )
}

export default Index