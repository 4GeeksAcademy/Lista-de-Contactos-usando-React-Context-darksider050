import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Contact } from "./pages/Contact";
import { AddContact } from "./pages/AddContact";
import { Demo } from "./pages/Demo";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
            <Route index element={<Navigate to="/contacts" replace />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="add-contact" element={<AddContact />} />
            <Route path="/demo" element={<Demo />} />
        </Route>
    )
);