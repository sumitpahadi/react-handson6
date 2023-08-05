import { useContext } from "react";
import storeData from "./Store";
import "../App.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Addnewstudent = () => {
  const ContextData = useContext(storeData);
  console.log(ContextData);

  const navi = useNavigate();

  const newStu = {
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  };

  const handleChange = (e) => {
    console.log("onchange");
    newStu[e.target.name] = e.target.value;
  };

  const handleClick = () => {
    console.log("Hello");
    ContextData.stuName.push(newStu);
    navi("/Students");
  };
  return (
    <div>
      <h1>Add New Student</h1>
      <div className="form">
        <form action="">
          <label htmlFor="">Name</label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <br />

          <label htmlFor="">Age</label>
          <input
            type="text"
            id="age"
            name="Age"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <br />

          <label htmlFor="">Course</label>
          <input
            type="text"
            id="course"
            name="Course"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <br />

          <label htmlFor="">Batch</label>
          <input
            type="text"
            id="batch"
            name="Batch"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <br />

          <div className="di">
           
            <input type="submit" onClick={handleClick} className="button1"/>
            <Link to={"/students"}>
            <input type="submit" value='cancel' className="button1"/>
            </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addnewstudent;
