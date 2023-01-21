import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import App from './App'
import { bookmarksLoader, updateBookLoader, showBookLoader, deleteBookLoader } from './loaders'
import { createBookmark, updateBookmark, deleteBookmark } from './actions'
import Index from './pages/Index'
import Update from './pages/Update'
import Delete from './pages/Delete'
import Show from "./pages/Show"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} loader={bookmarksLoader}>
            <Route path="" element={<Index/>} loader={bookmarksLoader} />
            <Route path=":id" element={<Update />} loader={updateBookLoader} />
            <Route path="show/:id" element={<Show />} loader={showBookLoader} />
            <Route path="delete/:id" element={<Delete />} loader={deleteBookLoader} />
            <Route path="create" action={createBookmark} />
            <Route path="update/:id" action={updateBookmark} />
            <Route path="delete/:id" action={deleteBookmark} />
        </Route>
    )
)

export default router
