import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <h1 className="text-center">Let's generate your Resume!</h1>
    //   <Home/>
    // </div>
  );
}

export default App;
