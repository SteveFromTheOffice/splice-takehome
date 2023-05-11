import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout.component";
import Dashboard from "./components/Dashboard/Dashboard.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
