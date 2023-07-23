/* eslint-disable react/prop-types */
import styles from "./EmployeeDetail.module.css";

export const EmployeeDetail = ({ employee }) => {
  const hourlyWage = 20;

  const calculateSalary = () => {
    switch (employee.salaryType) {
      case 1:
        return hourlyWage * employee.workHours;
      case 2:
        return employee.salary;
      case 3:
        return employee.workHours > 100
          ? employee.salary
          : 0.75 * hourlyWage * employee.workHours;
      default:
        return 0;
    }
  };
  return (
    <div className={styles.card}>
      <h3 className={styles.textCenter}>
        <span className={styles.textBold}>Name:</span> {employee.firstName}{" "}
        {employee.lastName}
      </h3>
      <p>
        <span className={styles.textBold}>Phone:</span> +91{employee.phone}
      </p>
      <p>
        <span className={styles.textBold}>Email:</span> {employee.email}
      </p>
      <p>
        <span className={styles.textBold}>Work Hours:</span>{" "}
        {employee.workHours}
      </p>
      <p>
        <span className={styles.textBold}>Salary:</span> ₹{calculateSalary()}
      </p>
      <p>
        <span className={styles.textBold}>Department:</span>{" "}
        {employee.department}
      </p>
      <p>
        <span className={styles.textBold}>Login User ID:</span>{" "}
        {employee.loginUserId}
      </p>
    </div>
  );
};
