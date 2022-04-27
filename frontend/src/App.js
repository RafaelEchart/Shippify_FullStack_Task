import { Routes, Route, Navigate } from "react-router-dom";
import DrawerMenu from "./components/DrawerMenu";
import ShowList from "./components/ShowPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DrawerMenu />

      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/new" element={<ShowList />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
