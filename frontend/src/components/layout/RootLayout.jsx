import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function RootLayout() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex-1 w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
