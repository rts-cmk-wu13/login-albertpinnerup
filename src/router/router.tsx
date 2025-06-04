import { createBrowserRouter, type ActionFunction, type LoaderFunction } from "react-router";
import Layout from "../Layout";
import Home from "../views/Home";
import Contact from "../views/Contact";
import Loading from "../components/Loading";
import Login from "../views/Login";
import RequireAuth from "../components/RequireAuth";
import { handleSubmit } from "../api/actions";
import { getSecrets } from "../api/authExercise";
import Secrets from "../views/Secrets";
import Signup from "../views/Signup";

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
                path: "secrets",
                element: 
                <RequireAuth>
                    <Secrets />
                </RequireAuth>,
                loader: getSecrets as LoaderFunction,
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
                path: "signup",
                element: <Signup />,
            },
            {
                path: "*",
                element: <h1>404</h1>,
            },
        ],
    },
]);

export default router;
