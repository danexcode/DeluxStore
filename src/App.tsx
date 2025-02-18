import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Home from "@/pages/home";
import NotFound from "@/pages/not_found";
import Products from "@/pages/products";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} ></Route>
        <Route path="products" element={<Products />} ></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}
