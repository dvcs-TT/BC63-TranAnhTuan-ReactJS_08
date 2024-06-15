import "./App.css";
import { ReactForm } from "./ReactForm/ReactForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<ReactForm />} />
        <Route path={"/reactform"} element={<ReactForm />} />
      </Routes>
    </div>
  );
}

export default App;
