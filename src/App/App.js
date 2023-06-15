import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GeneralProvider } from "../context";
import { Index } from "../pages/Index";
import { CreateUser } from "../pages/CreateUser";
import { EditUser } from "../pages/EditUser";

function App() {
    return (
        <BrowserRouter>
            <GeneralProvider>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/edit-user/:id" element={<EditUser />} />
                </Routes>
            </GeneralProvider>
        </BrowserRouter>
    );
}
export { App };