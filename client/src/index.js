import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Register from './pages/Register'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Authors from './pages/Authors'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import CategoryPosts from './pages/CategoryPosts'
import AuthorPosts from './pages/AuthorPosts'
import Dashboard from './pages/Dashboard'
import Logout from './pages/Logout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home />},
      {path: "post/:id", element: <PostDetail />},
      {path: "register", element: <Register />},
      {path: "login", element: <Login />},
      {path: "profile/:id", element: <UserProfile />},
      {path: "authors", element: <Authors />},
      {path: "create", element: <CreatePost />},
      {path: "post/categories/:category", element: <CategoryPosts />},
      {path: "post/user/:id", element: <AuthorPosts />},
      {path: "mypost/:id", element: <Dashboard />},
      {path: "post/:id/edit", element: <EditPost />},
      {path: "logout", element: <Logout />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
