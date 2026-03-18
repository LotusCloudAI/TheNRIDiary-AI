import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import CategoryPage from "../pages/CategoryPage"
import StoryDetail from "../pages/StoryDetail"
import SearchResults from "../pages/SearchResults"
import NotFound from "../pages/NotFound"

export default function AppRouter() {
 return (
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/category/:name" element={<CategoryPage />} />
     <Route path="/story/:id" element={<StoryDetail />} />
     <Route path="/search" element={<SearchResults />} />
     <Route path="*" element={<NotFound />} />
   </Routes>
 )
}
