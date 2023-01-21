const URL = "https://bookmark-backend-ae9o.onrender.com"

export const bookmarksLoader = async () => {
    const response = await fetch(URL + "/book")
    const bookmarks = await response.json()
    return bookmarks
}

export const updateBookLoader = async ({params}) => {
    const response = await fetch(URL + "/book/" + params.id )
    const book = await response.json()
    return book
  }

export const showBookLoader = async ({params}) => {
    const response = await fetch(URL + "/book/" + params.id )
    const book = await response.json()
    return book
  }

export const deleteBookLoader = async ({params}) => {
    const response = await fetch(URL + "/book/" + params.id )
    const book = await response.json()
    return book
  }