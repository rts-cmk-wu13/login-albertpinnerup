
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
        </>
    );
}

export default Layout;
