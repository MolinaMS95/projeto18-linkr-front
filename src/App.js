import { BrowserRouter, Routes, Route } from "react-router-dom";
import Temp from "./components/temp.js";
export default function App() {

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Temp/>} />
            </Routes>
    </BrowserRouter>

);
}
