import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import MainLayout from "./components/layout/MainLayout"
import AppRouter from "./router/AppRouter"
// import GlobalStyles from "./design/GlobalStyles" // If using styled-components

export default function App() {
  return (
    // {/* <GlobalStyles /> */} {/* Uncomment if using styled-components */}
    <AppProvider>
        <MainLayout>
        <AppRouter />
      </MainLayout>
    </AppProvider>
  )
}
