import { createBrowserRouter, type ActionFunction, type LoaderFunction } from "react-router";
import Layout from "../Layout";
import Home from "../views/Home";
import List from "../views/List";
import Contact from "../views/Contact";
import About from "../views/About";
import Details from "../views/Details";
import Loading from "../components/Loading";
import { getList, getListById } from "../api/typicode";
import Login from "../views/Login";
import RequireAuth from "../components/RequireAuth";
import { handleSubmit } from "../api/actions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "list",
                element: (
                    <RequireAuth>
                        <List />
                    </RequireAuth>
                ),
                loader: getList as LoaderFunction,
            },
            {
                path: "list/:id",
                element: (
                    <RequireAuth>
                        <Details />
                    </RequireAuth>
                ),
                loader: getListById as LoaderFunction,
            },
            {
                path: "contact",
                element: <Contact />,
                action: handleSubmit as ActionFunction,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "*",
                element: <h1>404</h1>,
            },
        ],
    },
]);

export default router;
