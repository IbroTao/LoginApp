import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

/** root routes */
const router =  createBrowserRouter([
    {
        path: '/',
        element: <div>Root Routes</div>
    },
    {
        path: '/register',
        element: <div>Register Routes</div>
    },
])

export default function App() {
    return(
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}