const URL = "https://bookmark-backend-ae9o.onrender.com"

export const bookmarksLoader = async () => {
    const response = await fetch(URL + "/book")
    const bookmarks = await response.json()
    return bookmarks
}