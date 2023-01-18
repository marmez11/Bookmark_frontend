import { useLoaderData, Form } from "react-router-dom"

function Update(props) {
    const book = useLoaderData()

    return (
        <div className="book">
  
          <h1>Update {book.title}</h1>
        <Form action={`/update/${book._id}`} method="post">
          <input type="input" name="title" defaultValue = {book.title} />
          <input type="input" name="url" defaultValue = {book.url} />
          <input type="submit" value={`Update ${book.title}`} />
        </Form>
 
        </div>
      )
    }
    
    export default Update