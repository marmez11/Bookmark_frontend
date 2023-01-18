const URL = "https://bookmark-backend-ae9o.onrender.com"

export const bookLoader = async () => {
  const response = await fetch(URL + "/book")
  const book = await response.json()
  return book
}