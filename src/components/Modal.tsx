import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  title: string;
  text: string;
  btnConfirm: string;
  showModal: boolean;
  handleCloseModal: () => void;
  handleConfirmDelete: () => void;
}

export default function Modal({
  title,
  text,
  btnConfirm,
  showModal,
  handleCloseModal,
  handleConfirmDelete,
}: ModalProps) {
  return (
    <>
      {showModal && (
        <div className={styles.modalContainer}>
          <h1>{title}</h1>
          <p>{text}</p>

          <div className={styles.btnContainer}>
            <button onClick={handleCloseModal}>Cancelar</button>
            <button onClick={handleConfirmDelete}>{btnConfirm}</button>
          </div>
        </div>
      )}
    </>
  );
}
