import { Footer } from "./core/footer"
import { Navbar } from "./core/navbar"

export const MainLayout = ({ children } : { children : React.ReactNode}) => {
    return (
        <>
            <Navbar />
            <main className="container">
                {children}
            </main>
            <Footer />
        </>
    )
}
