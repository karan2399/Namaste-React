import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaruantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* A placeholder outlet for children */}
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <main className="route-loading" role="status" aria-live="polite">
                <div className="route-loading-card">
                  <span className="route-loading-spinner" aria-hidden="true" />
                  <p className="route-loading-eyebrow">Foodology</p>
                  <h1>Getting your grocery store ready</h1>
                  <p className="route-loading-copy">
                    Just a moment while we bring everything together.
                  </p>
                  <div className="route-loading-skeleton" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </main>
            }>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaruantMenu /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// Render AppLayout to the root.
root.render(<RouterProvider router={appRouter} />);
