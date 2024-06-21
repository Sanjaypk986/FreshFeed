import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './errorPage';
import Home, {loader as homeloader} from './pages/home';
import Articles,{loader as articlesloader} from './pages/articles';
import Authors,{loader as authorsloader} from './pages/authors';
import ArticlePage,  {loader as articleloader} from './pages/articlePage';
import AuthorPage,{loader as authorloader} from './pages/authorPage';
import Login from './pages/login';
import SignUp from './pages/signUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement : <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeloader
      },
      {
        path: "/articles",
        element: <Articles />,
        loader: articlesloader
      },
      {
        path: "/articles/:articleId",
        element: <ArticlePage />,
        loader: articleloader
      },
      {
        path: "/authors",
        element: <Authors />,
        loader: authorsloader
      },
      {
        path: "/authors/:authorId",
        element: <AuthorPage />,
        loader: authorloader
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
