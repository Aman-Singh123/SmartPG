import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PGListingPage } from "./pages/PGListingPage";
import { PGDetailsPage } from "./pages/PGDetailsPage";
import { AboutPage } from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/browse",
    Component: PGListingPage,
  },
  {
    path: "/pg/:id",
    Component: PGDetailsPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
]);