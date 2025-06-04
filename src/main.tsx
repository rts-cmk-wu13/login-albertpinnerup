import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router/router.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./api/queryClient.js";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/index.scss";

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root element not found");
}

createRoot(root).render(
    <StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </AuthProvider>
    </StrictMode>
);
