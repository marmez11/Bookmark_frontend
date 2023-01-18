import { Form, useLoaderData } from "react-router-dom"

function Index(props) {
  const book = useLoaderData()

  return (
    <div>
      <h2>Add a Bookmark</h2>
      <Form action="/create" method="post">
        <input type="input" name="title" placeholder="Book's name" />
        <input type="input" name="url" placeholder="Book's Link" />
        <input type="submit" value="Add Book" />
      </Form>

      <h2>Bookmark List</h2>
      {book.map(book => (
        <div key={book._id} className="book">
          <a href={`https://${book.url}`}>
            <h1>{book.title}</h1>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Index