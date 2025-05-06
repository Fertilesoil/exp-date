import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CategoryDisplay from "./pages/CategoryDisplay";


export const routes = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/:category', element: <CategoryDisplay />}
]);