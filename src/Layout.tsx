
import { Outlet } from "react-router";
import Header from "./components/Header";

type LayoutProps = { children?: React.ReactNode };

function Layout({ children }: LayoutProps) {
    
    return (
        <>
            <Header />
            <main>
              {children || <Outlet />}
            </main>
            <footer>
                <small>2025 my app</small>
            </footer>
        </>
    );
}

export default Layout;
