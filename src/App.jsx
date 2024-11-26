import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/about/About";
import Homepage from "./pages/home/Index";
import RootLayOut from "./layout/RootLayOut";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayOut/>}>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
