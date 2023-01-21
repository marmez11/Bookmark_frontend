import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const book = useLoaderData()

    return (
        <div className="book_show">
          <h1 className="book_title">Show {book.title}'s Contents</h1>
        <Form className="book_show_display" action={`/show/${book._id}`} method="get">
            <p className="book_title_show">Book Title: {`${book.title}`}</p>
            <p className="book_title_url">Book URL: <em><b><a href={`https://${book.url}`}>{`${book.title}`}</a></b></em></p>
        </Form>
        <button class="return_to_home_page"><a href="/">Return to Homepage of Bookmark App</a></button>
        </div>
      )
    }
    
    export default Show