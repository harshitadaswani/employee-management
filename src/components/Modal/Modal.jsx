/* eslint-disable react/prop-types */
import styles from "./Modal.module.css";

export const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div
      className={`${styles.modal} ${props.show ? styles.show : ""}`}
      onClick={props.onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{props.title}</h4>
        </div>
        <div className={styles.modalBody}>{props.children}</div>
        {/* <div className={styles.modalFooter}>
          <button onClick={props.onClose}>Close</button>
        </div> */}
      </div>
    </div>
  );
};
