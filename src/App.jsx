import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routerRoutes } from "./configs/configs";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routerRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}
