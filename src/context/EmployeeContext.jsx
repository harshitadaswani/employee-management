import { createContext, useContext, useState } from "react";
import employees from "../data/data";

const defaultValue = [];

const EmployeeContext = createContext(defaultValue);

// eslint-disable-next-line react/prop-types
export const EmployeeProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState(employees);
  return (
    <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
      {children}
    </EmployeeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEmployee = () => useContext(EmployeeContext);
