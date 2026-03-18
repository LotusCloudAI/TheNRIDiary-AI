import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import MainLayout from "./components/layout/MainLayout"
import AppRouter from "./router/AppRouter"

export default function App() {
  return (
    <AppProvider>
        <MainLayout>
        <AppRouter />
      </MainLayout>
    </AppProvider>
  )
}
