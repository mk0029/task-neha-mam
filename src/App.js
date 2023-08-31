import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNav from "./components/CustomNav";
import NestedMap from "./components/NestedMap";
import Emailjs from "./components/Emailjs";
import CustomSlect from "./components/CustomSlect";
import PropsData from "./components/PropsData";
import FilterData from "./components/FilterData";
import MapFilterV2 from "./components/MapFilterV2";

function App() {
  return (
    <>
      <CustomNav />
      <Routes>
        <Route path="/NestedMap" element={<NestedMap />} />
        <Route path="/Emailjs" element={<Emailjs />} />
        <Route path="/CustomSlect" element={<PropsData />} />
        <Route path="/FilterData" element={<FilterData />} />
        <Route path="/MapFilterV2" element={<MapFilterV2 />} />
      </Routes>
    </>
  );
}

export default App;
