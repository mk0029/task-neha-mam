import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNav from "./components/CustomNav";
import NestedMap from "./components/NestedMap";
import Emailjs from "./components/Emailjs";
// import CustomSlect from "./components/CustomSlect";
import PropsData from "./components/PropsData";
import FilterData from "./components/FilterData";
import StudentTodo from "./components/StudentTodo";
import CustomDrop from "./components/CustomDrop";
import CustomTab from "./components/CustomTab";
import CustomSidebar from "./components/CustomSidebar";

function App() {
  return (
    <>
      {/* <CustomNav /> */}
      <Routes>
        <Route path="/NestedMap" element={<NestedMap />} />
        <Route path="/Emailjs" element={<Emailjs />} />
        <Route path="/CustomSlect" element={<PropsData />} />
        <Route path="/FilterData" element={<FilterData />} />
        <Route path="/StudentTodo" element={<StudentTodo />} />
        <Route path="/CustomDrop" element={<CustomDrop />} />
        <Route path="/CustomTab" element={<CustomTab />} />
        <Route path="/CustomSidebar" element={<CustomSidebar />} />
      </Routes>
    </>
  );
}

export default App;
