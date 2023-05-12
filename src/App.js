import {Navigate, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout.component";
import Dashboard from "./pages/Dashboard/Dashboard.component";
import Calculator from "./pages/Calculator/Calculator.component";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    for (const key in theme) {
      document.documentElement.style.setProperty(`--theme-${key}`, theme[key]);
    }
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard/default/overview" />} />
        <Route path="/dashboard/default/overview" element={<Dashboard />} />
        <Route path="/pages/tools/calculator" element={<Calculator />} />
        <Route path="*" element={<div>404 Not Found</div>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
