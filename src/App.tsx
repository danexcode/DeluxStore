import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Home from "@/pages/home";
import Search from "@/pages/search";
import NotFound from "@/pages/not_found";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} ></Route>
        <Route path="/search/" element={<Search />} ></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}
