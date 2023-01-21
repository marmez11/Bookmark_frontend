import { useLoaderData, Form } from "react-router-dom"

function Delete(props) {
    const book = useLoaderData()

    return (
        <div className="book_delete">
          <h1 className="book_delete_title">Deleting Content for {book.title}</h1>
          <p className="book_title_show">Book Title: {`${book.title}`}</p>
            <p className="book_title_url">Book URL: <em><b><a href={`https://${book.url}`}>{`${book.title}`}</a></b></em></p>
        <Form action={`/delete/${book._id}`} method="delete">
          <input type="submit" value={`Delete Bookmark ${book.title}`} />
        </Form>
        </div>
      )
    }
    
    export default Delete