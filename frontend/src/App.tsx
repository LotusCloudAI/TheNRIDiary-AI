import { BrowserRouter } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import AppRouter from "./router/AppRouter"

export default function App() {
 return (
    <MainLayout>
     <AppRouter />
   </MainLayout>
 )
}
