import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import App from './App'
import { bookmarksLoader, updateBookLoader } from './loaders'
import { createBookmark, updateBookmark, deleteBookmark } from './actions'
import Index from './pages/Index'
import Update from './pages/Update'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={bookmarksLoader} />
            <Route path=":id" element={<Update />} loader={updateBookLoader} />
            <Route path="create" action={createBookmark} />
            <Route path="update/:id" action={updateBookmark} />
            <Route path="delete/:id" action={deleteBookmark} />
        </Route>
    )
)

export default router