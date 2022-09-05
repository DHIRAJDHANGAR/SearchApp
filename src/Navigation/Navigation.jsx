import { Routes, Route } from "react-router-dom";
import ProductDashboard from "../Features";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductDashboard />}></Route>
      {/* <Route path="/details/:id"></Route> */}
    </Routes>
  );
};
export default Navigation;
