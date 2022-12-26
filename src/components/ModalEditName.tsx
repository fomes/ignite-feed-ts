import React from "react";
import styles from "./ModalEditName.module.css";

interface ModalProps {
  title: string;
  btnConfirm: string;
  showModal: boolean;
  onChange: (value: any) => void;
  handleCloseModal: () => void;
  handleConfirmEdit: () => void;
}

export default function ModalEditName({
  title,
  btnConfirm,
  showModal,
  onChange,
  handleCloseModal,
  handleConfirmEdit,
}: ModalProps) {
  return (
    <>
      {showModal && (
        <div className={styles.modalContainer}>
          <h1>{title}</h1>

          <input
            type="text"
            placeholder="Digite novo nome"
            onChange={onChange}
          />

          <div className={styles.btnContainer}>
            <button onClick={handleCloseModal}>Cancelar</button>
            <button onClick={handleConfirmEdit}>{btnConfirm}</button>
          </div>
        </div>
      )}
    </>
  );
}
