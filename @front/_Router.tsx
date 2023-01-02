import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {APP_ROUTES, ROUTE_KEYS} from "@Config/appRoutes";
import LoginPage from "./Pages/Login/LoginPage";
import ProtectedRoute from "./_ProtectedRoute";
import Layout from "@Components/Layout/Base/Layout";
import NotFoundPage from "@Pages/Errors/NotFoundPage";
import HomePage from "@Pages/Home/HomePage";
import {useAtomValue} from "jotai";
import {userAtom} from "@Store/userStore";
import ScrollRestoration from "./_ScrollRestoration";
import HistoryPage from "@Pages/History/HistoryPage";
import AboutUsPage from "@Pages/AboutUs/AboutUsPage";
import ContactsPage from "@Pages/Contacts/ContactsPage";
import CatalogPage from "@Pages/Catalog/CatalogPage";
import ProductPage from "@Pages/Product/ProductPage";
import PolicyPage from "@Pages/Policy/PolicyPage";

const PAGE_COMPONENTS: Record<ROUTE_KEYS, JSX.Element> = {
    LOGIN: <LoginPage/>,
    HOME: <HomePage/>,
    ABOUT_US: <AboutUsPage/>,
    HISTORY: <HistoryPage/>,
    CONTACTS: <ContactsPage/>,
    CATALOG: <CatalogPage/>,
    PRODUCT: <ProductPage/>,
    POLICY: <PolicyPage/>,
    USERS_VIEW: <></>,
};


const Router = () => {
    const {logged} = useAtomValue(userAtom);

    return (
        <BrowserRouter>
            <ScrollRestoration>
                <Routes>
                    <Route path="/" element={
                        <ProtectedRoute> <Layout/></ProtectedRoute>
                    }>
                        {APP_ROUTES.map(route =>
                            <Route
                                key={route.key}
                                path={route.path}
                                element={PAGE_COMPONENTS[route.key]}/>
                        )}
                        <Route path={"*"} element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </ScrollRestoration>
        </BrowserRouter>
    );
}

export default Router;
