import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import ImageDisplay from "./components/ImageDisplay";
import Counter from "./components/Counter";
import PropsDemo from "./components/PropsDemo";
import CrudOperations from "./components/CrudOperations";
import DataFetching from "./components/DataFetching";
import RoutingExample from "./components/RoutingExample";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/image-display">Image Display</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/props-demo">Props Demo</Link></li>
          <li><Link to="/crud">CRUD Operations</Link></li>
          <li><Link to="/data-fetching">Data Fetching</Link></li>
          <li><Link to="/routing">Routing Example</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-display" element={<ImageDisplay />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/props-demo" element={<PropsDemo />} />
        <Route path="/crud" element={<CrudOperations />} />
        <Route path="/data-fetching" element={<DataFetching />} />
        <Route path="/routing" element={<RoutingExample />} />
      </Routes>
    </div>
  );
}

export default App;
