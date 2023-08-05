import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Students from "./Studentname";
import Contact from "./Contact";
import { useState } from "react";
import StoreData from "./Store";
import "../App.css";
import AddNewStudent from "./Addnewstudent";
import EditStudent from "./Edit";

const Routescomponent = () => {
  const [studentData, setStudentData] = useState([
    { Name: "Nitin", Age: 21, Course: "MERN", Batch: "EA23" },
    { Name: "Sumit", Age: 22, Course: "REACT", Batch: "EA23" },
    { Name: "Akanksha", Age: 23, Course: "Node", Batch: "EA23" },
    { Name: "Yash", Age: 24, Course: "MEAN", Batch: "EA23" },
  ]);

  return (
    <>
      <BrowserRouter>
        <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/students"
            element={
              <StoreData.Provider
                value={{ stuName: studentData, updateStu: setStudentData }}
              >
                <Students />
              </StoreData.Provider>
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route
            path="/addnewstudent"
            element={
              <StoreData.Provider
                value={{ stuName: studentData, updateStu: setStudentData }}
              >
                <AddNewStudent />
              </StoreData.Provider>
            }
          />
          <Route
            path="/editstudent"
            element={
              <StoreData.Provider
                value={{ stuName: studentData, updateStu: setStudentData }}
              >
                <EditStudent />
              </StoreData.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routescomponent;
