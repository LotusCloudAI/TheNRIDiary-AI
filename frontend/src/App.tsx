import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import MainLayout from "./components/layout/MainLayout"
import AppRouter from "./router/AppRouter"
import ErrorBoundary from "./components/common/ErrorBoundary"
// import GlobalStyles from "./design/GlobalStyles" // If using styled-components

export default function App() {
  return (
    // {/* <GlobalStyles /> */} {/* Uncomment if using styled-components */}
    <ErrorBoundary>
      <AppProvider>
        <MainLayout>
        <AppRouter />
        </MainLayout>
      </AppProvider>
    </ErrorBoundary>
    
  )
}
