import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./Components/pages/Home";

function App() {
  return (
    // <header>
    //   <h1>LetYourComment</h1>
    // </header>
    <Router>
      <h1>LetYourComment</h1>
      <Routes> 
        <Route path="/" element={<Home/>}/>
      </Routes> 
    </Router>
  )
}

export default App;
