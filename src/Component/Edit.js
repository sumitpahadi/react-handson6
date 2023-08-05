import { useContext } from "react";
import storeData from "./Store";
import { useLocation } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Edit = () => {
  const index = useLocation().state.data;
  console.log(index)
  const ContextData = useContext(storeData);
  console.log(ContextData);

  const Navi = useNavigate();

  const update = {
    Name: ContextData.stuName[index].Name,
    Age: ContextData.stuName[index].Age,
    Course:ContextData.stuName[index].Course ,
    Batch: ContextData.stuName[index].Batch,
  };

  const handleChange = (e) => {
   
    update[e.target.name] = e.target.value;

  };


  
//  const handleChange = (e) => {
//   ContextData.updateStu(e.target.value)
// };




  const handleClick = () => {
    ContextData.stuName[index]=update
        Navi('/Students')
  };
  return (
    <div>
      <h1>Add New Student</h1>
      <div className="form">
        <form action="">
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="Name"
            placeholder={ContextData.stuName[index].Name}
            // value={ContextData.stuName[index].Name}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="">Age</label>
          <br />
          <input
            type="text"
            id="age"
            name="Age"
            placeholder={ContextData.stuName[index].Age}
            // value={ContextData.stuName[index].Name}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="">Course</label>
          <br />
          <input
            type="text"
            id="course"
            name="Course"
            placeholder={ContextData.stuName[index].Course}
            // value={ContextData.stuName[index].Course}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="">Batch</label>
          <br />
          <input
            type="text"
            id="batch"
            name="Batch"
            placeholder={ContextData.stuName[index].Batch}
            // value={ContextData.stuName[index].Batch}
            onChange={handleChange}
          />
          <br />

          <div className="di">
            <button type="button" onClick={handleClick} className="button1">
              submit
            </button>
            <Link to={"/students"}>
            <input type="submit" value='cancel' className="button1"/>
            </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
