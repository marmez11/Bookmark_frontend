// YOUR DEPLOYED API BASE URL
const URL = "https://project-4-backend-weapons.onrender.com"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/weapons")
    const todos = await response.json()
    return todos
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/weapons/${params.id}/`)
    const todo = await response.json()
    return todo
}