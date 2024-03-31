import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Divisor from "./Components/layout/Divisor";
import Footer from "./Components/layout/Footer";
import Header from "./Components/layout/Header";
import Home from "./Components/pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Divisor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Divisor />
      <Footer />
    </Router>
  )
}

export default App;
