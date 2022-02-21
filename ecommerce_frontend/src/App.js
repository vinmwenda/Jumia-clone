import React from "react";
import "./App.css";
import HomeScreen from "./Components/Screens/HomeScreen";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import ProductDetails from "./Components/Screens/ProductDetails";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  let params = useParams();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/:p"
          element={<ProductDetails router={{ location, navigate, params }} />}
        />
      </Routes>
    </>
  );
}

export default App;
