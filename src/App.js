import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaruantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, use, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import ThemeContext from "./utils/ThemeContext";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState();

  const [theme, setTheme] = useState("light");

  // authentication

  useEffect(() => {
    // Some Auth Logic
    const data = {
      name: "User",
    };
    setUserName(data.name);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className={theme === "dark" ? "dark" : ""}>
          <div className="flex min-h-screen flex-col bg-slate-50 text-gray-800 dark:bg-slate-950 dark:text-slate-100">
            <Header />
            {/* A placeholder outlet for children */}
            <Outlet />
            <Footer />
          </div>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
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
              <main
                className="mx-auto grid min-h-[440px] w-[calc(100%_-_32px)] max-w-[760px] flex-1 place-items-center py-12"
                role="status"
                aria-live="polite">
                <div className="w-full rounded-[28px] border border-[#f1e5d9] bg-[radial-gradient(ellipse_at_100%_0,rgba(255,215,170,0.4),transparent_38%),#fff] p-[clamp(24px,5vw,48px)] text-center shadow-[0_16px_40px_rgba(89,55,27,0.07)] dark:border-slate-700 dark:bg-[radial-gradient(ellipse_at_100%_0,rgba(249,115,22,0.12),transparent_38%),#0f172a] dark:shadow-black/30">
                  <span
                    className="mx-auto mb-[18px] block size-[34px] animate-spin rounded-full border-[3px] border-[#f8dfca] border-t-[#ed6a36]"
                    aria-hidden="true"
                  />
                  <p className="mb-2 text-[0.76rem] font-extrabold tracking-[0.16em] text-[#d96a2d] uppercase dark:text-orange-300">
                    Foodology
                  </p>
                  <h1 className="m-0 text-[clamp(1.5rem,4vw,2.2rem)] leading-[1.2] tracking-[-0.04em] text-[#18212b] dark:text-slate-100">
                    Getting your grocery store ready
                  </h1>
                  <p className="mt-2.5 text-slate-500 dark:text-slate-400">
                    Just a moment while we bring everything together.
                  </p>
                  <div
                    className="mt-[30px] grid grid-cols-3 gap-3"
                    aria-hidden="true">
                    <span className="h-[74px] animate-pulse rounded-[14px] border border-gray-100 bg-gray-100 motion-reduce:animate-none dark:border-slate-700 dark:bg-slate-800" />
                    <span className="h-[74px] animate-pulse rounded-[14px] border border-gray-100 bg-gray-100 motion-reduce:animate-none dark:border-slate-700 dark:bg-slate-800" />
                    <span className="h-[74px] animate-pulse rounded-[14px] border border-gray-100 bg-gray-100 motion-reduce:animate-none dark:border-slate-700 dark:bg-slate-800" />
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
