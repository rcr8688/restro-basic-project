import React, { lazy, Suspense, useContext, useState } from "react";
import reactDom from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./src/components/navbar.component";
import DashBoardComponent from "./src/components/dashboard.component";
import Footer from "./src/components/footer.component";
import "./src/components/dashboard.component.css";
import Error from "./src/shared/commonComponents/error-page.component";
import RestroDetails from "./src/components/restro-details.component";
import About from "./src/components/about.component";
import userContext from "./src/utils/contexts/userContext";

const InstaMart = lazy(() => import("./src/components/instaMart"));

const App = () => {
  const [user, setUser] = useState({ name: "ravi", email: "rs@gmail.com" });
  return (
    <userContext.Provider value={{ user: user, setUser: setUser }}>
      <React.Fragment>
        <Navbar />
        <Outlet />
        <Footer />
      </React.Fragment>
    </userContext.Provider>
  );
};

const newRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <DashBoardComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restDetails/:id",
        element: <RestroDetails />,
      },
      {
        path: "/mart",
        element: (
          <Suspense fallback={""}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const rootId = document.getElementById("root");
const dom = reactDom.createRoot(rootId);
dom.render(<RouterProvider router={newRouter}></RouterProvider>);
