import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Newsletter from "./Pages/Newsletter";

const App = () => {
  return (
    <div className="bg-neutral-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newslatter" element={<Newsletter />} />
      </Routes>
    </div>
  );
};

export default App;
