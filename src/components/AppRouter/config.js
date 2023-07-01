import { AuthPage } from "../../pages/AuthPage/model";
import { FAQPage } from "../../pages/FAQPage";
import { MainPage } from "../../pages/MainPage";
import { RatesPage } from "../../pages/RatesPage";
import { ResultPage } from "../../pages/ResultPage";
import { SearchPage } from "../../pages/SearchPage";

export const routeConfig = {
    main: {
        path: '/',
        element: <MainPage />,
    },
    rates: {
        path: '/rates',
        element: <RatesPage />,
    },
    faq: {
        path: '/faq',
        element: <FAQPage />,
    },
    auth: {
        path: '/auth',
        element: <AuthPage />,
    },
    search: {
        path: '/search',
        element: <SearchPage />,
    },
    result: {
        path: '/result',
        element: <ResultPage />,
    },
}