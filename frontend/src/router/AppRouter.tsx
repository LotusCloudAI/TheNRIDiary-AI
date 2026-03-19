import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Loader from "../components/common/Loader"

// Lazy load pages
const Home = lazy(() => import("../pages/Home"))
const CategoryPage = lazy(() => import("../pages/CategoryPage"))
const StoryDetail = lazy(() => import("../pages/StoryDetail"))
const SearchResults = lazy(() => import("../pages/SearchResults"))
const NotFound = lazy(() => import("../pages/NotFound"))

export default function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/story/:id" element={<StoryDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
