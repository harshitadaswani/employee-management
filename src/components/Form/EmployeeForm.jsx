import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import styles from "./EmployeeForm.module.css";

// eslint-disable-next-line react/prop-types
export const EmployeeForm = ({ employee, onSubmit, buttonText }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    workHours: 0,
    salaryType: 1,
    salary: 0,
    department: "",
    loginUserId: "",
  };

  const validationSchema = object().shape({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    phone: string().required("Phone is required"),
    email: string()
      .email("Invalid Email Address")
      .required("Email is required"),
    workHours: number()
      .positive("Work Hours should be a positive number")
      .integer()
      .required("Work Hours is required"),
    salaryType: number()
      .min(1, "Salary Type can't be less than 1")
      .max(3, "Salary Type can't be greater than 3")
      .required("Salary Type is required"),
    salary: number()
      .positive("Salary must be a positive number")
      .integer()
      .required("Salary is required"),
    department: string().required("Department is required"),
    loginUserId: string().required("Login User Id is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={employee ? employee : initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.textLeft}>
        <div className={styles.marginBottom}>
          <label>
            <div className={styles.flex}>
              <span>First Name: </span>
              <Field type="text" name="firstName" />
            </div>
            <ErrorMessage
              name="firstName"
              component="div"
              className={styles.redText}
            />
          </label>
        </div>
        <div className={styles.marginBottom}>
          <label>
            <div className={styles.flex}>
              <span>Last Name: </span>
              <Field type="text" name="lastName" />
            </div>
            <ErrorMessage
              name="lastName"
              component="div"
              className={styles.redText}
            />
          </label>
        </div>
        <div className={styles.marginBottom}>
          <label>
            <div className={styles.flex}>
              <span>Phone: </span>
              <Field type="text" name="phone" />
            </div>
            <ErrorMessage
              name="phone"
              component="div"
              className={styles.redText}
            />
          </label>
        </div>
        <div className={styles.marginBottom}>
          <label>
            <div className={styles.flex}>
              <span>Email: </span>
              <Field type="email" name="email" />
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className={styles.redText}
            />
          </label>
        </div>
        <div className={styles.marginBottom}>
          <label>
            <div className={styles.flex}>
              <span>Work Hours: </span>
              <Field type="number" name="workHours" />
            </div>
            <ErrorMessage
              name="workHours"
              component="div"
              className={styles.redText}
            />
          </label>
        </div>
        <div className={styles.marginBottom}>
          <label>
            <div className={styles.flex}>
              <span>Salary Type: </span>
              <Field type="number" name="salaryType" />
            </div>
            <ErrorMessage
              name="salaryType"
              component="div"
              className={styles.redText}
            />
          </label>
        </div>
        <div className={styles.marginBottom}>
          <label>
            <div className={styles.flex}>
              <span>Salary: </span>
              <Field type="number" name="salary" />
            </div>
            <ErrorMessage
              name="salary"
              component="div"
              className={styles.redText}
            />
          </label>
        </div>
        <div className={styles.marginBottom}>
          <label>
            <div className={styles.flex}>
              <span>Department: </span>
              <Field type="text" name="department" />
            </div>
            <ErrorMessage
              name="department"
              component="div"
              className={styles.redText}
            />
          </label>
        </div>
        <div className={styles.marginBottom}>
          <label>
            <div className={styles.flex}>
              <span>Login User Id: </span>
              <Field type="text" name="loginUserId" />
            </div>
            <ErrorMessage
              name="loginUserId"
              component="div"
              className={styles.redText}
            />
          </label>
        </div>
        <div className={styles.buttonCenter}>
          <button type="submit" className={styles.btn}>
            {buttonText}
          </button>
        </div>
      </Form>
    </Formik>
  );
};
