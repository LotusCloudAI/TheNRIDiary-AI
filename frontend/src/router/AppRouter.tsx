import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Loader from "../components/common/Loader"
import PageTransition from "../components/common/PageTransition"

// Lazy load page components for code splitting
const Home = lazy(() => import("../pages/Home"))
const CategoryPage = lazy(() => import("../pages/CategoryPage"))
const StoryDetail = lazy(() => import("../pages/StoryDetail"))
const SearchResults = lazy(() => import("../pages/SearchResults"))
const NotFound = lazy(() => import("../pages/NotFound"))

// ... lazy imports

export default function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/category/:name" element={
          <PageTransition>
            <CategoryPage />
          </PageTransition>
        } />
        <Route path="/story/:id" element={
          <PageTransition>
            <StoryDetail />
          </PageTransition>
        } />
        <Route path="/search" element={
          <PageTransition>
            <SearchResults />
          </PageTransition>
        } />
        <Route path="*" element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        } />
      </Routes>
    </Suspense>
  )
}
