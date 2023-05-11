import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout.component";
import Dashboard from "./pages/Dashboard/Dashboard.component";
import Calculator from "./pages/Calculator/Calculator.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
      </Route>
    </Routes>
  );
}

export default App;
