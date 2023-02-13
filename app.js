import React from 'react'
import reactDom from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './src/components/navbar.component'
import DashBoardComponent from './src/components/dashboard.component'
import Footer from './src/components/footer.component'
import './src/components/dashboard.component.css'
import Error from './src/shared/commonComponents/error-page.component'
import RestroDetails from './src/components/restro-details.component'

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <DashBoardComponent />
            <Footer />
        </React.Fragment>
    )
}

const newRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    },
    {
        path:'/restDetails/:id',
        element:<RestroDetails/>
    }
])

const rootId = document.getElementById('root');
const dom = reactDom.createRoot(rootId);
dom.render(<RouterProvider router={newRouter}></RouterProvider>);
