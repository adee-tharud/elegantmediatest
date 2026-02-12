import Footer from "./Footer";
import Navbar from "./Navbar"

const Layout = ( { children }) => {
    return( 
        <div className="min-h-screen bg-secondary font-sans text-primary flex flex-col">
            <Navbar/>
            <main className= "flex-grow">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;