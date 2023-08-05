import { useContext } from "react";
import storeData from "./Store";
import "../App.css";


import { Link, useNavigate } from "react-router-dom";

const Students = () => {
  
 
  const contextData = useContext(storeData);
 
  const navi = useNavigate();

  const border = {
    border: "2px solid grey",
    borderCollapse: "collapse",
  };

  return (
    <>
      <div className="heading">
        
        <h1>Student Data</h1>
        <button onClick={() => navi("/Addnewstudent")}>Add New Student</button>
      </div>
      <div className="table-cont">
        <table style={border}>
          <thead>
            <tr style={border}>
              <td>Name</td>
              <td>age</td>
              <td>Course</td>
              <td>Batch</td>
              <td>Edit</td>
            </tr>
          </thead>
          <tbody>
            {contextData.stuName.map((item, index) => {
              return (
                <tr key={index} style={border}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td>
                  <td>
                    <Link to={"/EditStudent"} state={{data:index}}>Edit</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Students;
