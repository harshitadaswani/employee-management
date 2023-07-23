import { useState } from "react";
import "./App.css";
import { EmployeeForm, EmployeeList, Modal } from "./components";
import { useEmployee } from "./context/EmployeeContext";

function App() {
  const { employeeData, setEmployeeData } = useEmployee();
  const [show, setShow] = useState(false);
  const handleFormSubmit = (values) => {
    console.log("submittedValues: ", values);
    setEmployeeData([...employeeData, values]);
    setShow(false);
  };
  return (
    <>
      <div className="flex">
        <h1>Employee List</h1>
        <button onClick={() => setShow(true)}>Add Employee</button>
        <Modal title="Employee Form" show={show} onClose={()=>setShow(false)}>
          <EmployeeForm onSubmit={handleFormSubmit} buttonText="Add Employee" />
        </Modal>
      </div>
      <EmployeeList />
    </>
  );
}

export default App;
