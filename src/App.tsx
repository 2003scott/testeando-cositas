import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { MainLayout } from "./layouts/MainLayout"

function App() {
    return (
        <>
            <MainLayout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<p>404</p>} />
                    </Routes>
                </BrowserRouter>
            </MainLayout>
        </>
    )
}

export default App
