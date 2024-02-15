// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navication";
import Comp2 from "./components/comp2";
import Comp11 from "./page/Copm11";
import CopyrightNotice from "./components/footercopyright"

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Comp2/>
       
        <Routes>
              <Route path="/Copm11/:number/:name" element={<Comp11 />} />
        </Routes>
         <CopyrightNotice/>
      </BrowserRouter>
    </div>
  );
}

export default App;
