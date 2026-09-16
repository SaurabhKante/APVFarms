import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OurVision from "./pages/OurVision";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-vision" element={<OurVision />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;