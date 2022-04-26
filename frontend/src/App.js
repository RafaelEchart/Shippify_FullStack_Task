import { Routes, Route, Navigate } from "react-router-dom";
import ShowList from './components/ShowPage'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
