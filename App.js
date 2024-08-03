import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Table from "./component/Table";
import Login from "./pages/login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/table" element={<Table />} />
        <Route path="/login" element={<Login />} />

        {/* Other routes go here */}
      </Routes>
    </Router>
  );
}

export default App;
