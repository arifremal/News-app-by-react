import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home/Home";
import Category from "../Shared/Category";
import NewsLayout from "../Shared/NewsLayout";
import News from "../Shared/News";
import LoginLayout from "../Shared/LoginLayout";
import Login from "../Shared/Login";
import Register from "../Shared/Register";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to="/category/0"></Navigate>
      },
      {
      
      path:'/login',
      element:<Login></Login>

    },
    {
      path:'/register',
      element:<Register></Register>
    }
  ]
  },
  {
    path: "category",
    element: <Layout></Layout>,
    children: [
      
      {
        path:":id",
        element:<Category></Category>,
        loader: ({params})=> fetch (`http://localhost:5000/categories/${params.id}`)
      },
      
    ],
  },{
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path: ':id',
        element:<News></News>,
        loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);
export default router;
