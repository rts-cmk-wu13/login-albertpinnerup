
import { Outlet } from "react-router";
import Header from "./components/header/Header";

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
