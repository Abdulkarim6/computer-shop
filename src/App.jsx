import { RouterProvider } from "react-router";
import "./App.css";
import routers from "./routes/Routers";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={routers}></RouterProvider>
    </ProductProvider>
  );
}

export default App;
