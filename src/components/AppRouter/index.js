import { Route, Routes } from "react-router";
import { routeConfig } from "./config";

export const AppRouter = () => (
    <Routes>
        {
            Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={element}
                />
            ))
        }
    </Routes>
)