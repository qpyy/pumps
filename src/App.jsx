import { Route, Routes } from "react-router-dom";
import PumpSelection from "./pages/PumpSelection";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PumpSelection />} />
      <Route path="/results" element={<Result />} />
    </Routes>
  );
}

export default App;
