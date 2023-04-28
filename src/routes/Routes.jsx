import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home/Home";
import Category from "../Shared/Category";
import NewsLayout from "../Shared/NewsLayout";
import News from "../Shared/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader: ()=> fetch('http://localhost:5000/news')
      },
      {
        path:"/category/:id",
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
