import { EmployeeDetail, EmployeeForm, Modal } from "../index";
import styles from "./EmployeeList.module.css";
import { useEmployee } from "../../context/EmployeeContext";
import { useState } from "react";

export const EmployeeList = () => {
  const { employeeData, setEmployeeData } = useEmployee();
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const deleteClickHandler = (id) => {
    setEmployeeData(employeeData.filter((employee) => employee.id !== id));
  };

  const handleFormSubmit = (values) => {
    console.log("submittedValues: ", values);
    setEmployeeData((prev) =>
      prev.map((employee) =>
        employee.id === values.id ? { ...values } : employee
      )
    );
    setShow(false);
  };
  return (
    <div className={styles.cardContainer}>
      {employeeData.map((employee) => {
        return (
          <div key={employee.id} className={styles.card}>
            <EmployeeDetail employee={employee} />
            <button
              onClick={() => {
                setShow(true);
                setId(employee.id);
              }}
            >
              Update Details
            </button>{" "}
            &nbsp;
            <button onClick={() => deleteClickHandler(employee.id)}>
              Delete Employee
            </button>
            <Modal
              show={show && employee.id === id}
              title="Update Employee Detail"
              onClose={()=>setShow(false)}
            >
              <EmployeeForm
                employee={employee}
                onSubmit={handleFormSubmit}
                buttonText="Update Employee"
              />
            </Modal>
          </div>
        );
      })}
    </div>
  );
};
