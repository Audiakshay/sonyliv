import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TvShows from './Screens/TvShows';
import Home from './Screens/Home';
import SignIn from './Screens/SignIn';
import AdminLogin from './Screens/AdminLogin';
import AdminDashboard from './Screens/AdminDashboard';
import Admin from './Screens/Admin';
import AdminMovieAdd from './Screens/AdminMovieAdd';



function App() {
    const route = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            children: [
                {
                    index: true,
                    element: <TvShows />
                },
                {
                    path: 'signIn',
                    element: <SignIn />
                },
                {
                    path: 'Tv Shows',
                    element: <TvShows />
                },
                {
                    path: 'New',
                    element: <TvShows />
                },
                {
                    path: 'WWE',
                    element: <TvShows />
                },
                {
                    path: 'Sports',
                    element: <TvShows />
                },
                {
                    path: 'Movies',
                    element: <TvShows />
                },
                {
                    path: 'Originals',
                    element: <TvShows />
                },
                {
                    path: 'WatchFree',
                    element: <TvShows />
                },
                {
                    path: 'Premium',
                    element: <TvShows />
                },
            ]
        },
        {
            path: 'admin',
            element: <Admin />,
            children: [
                {
                    index: true,
                    element: <AdminLogin />
                },
                {
                    path: 'adminDashboard',
                    element: <AdminDashboard />
                },
                {
                    path: 'adminMovieAdd',
                    element: <AdminMovieAdd />
                },
            ]
        }
    ]);
  return (
    <RouterProvider router={route} />
  )
}

export default App