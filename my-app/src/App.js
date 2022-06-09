import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Womens from "./pages/womens/Womens";
import Mens from "./pages/mens/Mens";
import Jewelery from "./pages/jewelery/Jewelery";
import Electronics from "./pages/electronics/Electronics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
