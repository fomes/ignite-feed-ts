import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import Avatar from "./Avatar";
import ModalEditName from "./ModalEditName";

export default function Sidebar() {
  const [userName, editUserName] = useState("Felipe Gomes");
  const [nameInput, setNameInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleEditName = () => {
    setShowModal(true);
  };

  const handleConfirmEdit = () => {
    editUserName(nameInput);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ModalEditName
        title="Editar nome"
        btnConfirm="Salvar"
        onChange={(event: any) => setNameInput(event.target.value)}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleConfirmEdit={handleConfirmEdit}
      />
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1532289402244-3cbf8bdeb722?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        />

        <div className={styles.profile}>
          <Avatar src="https://github.com/fomes.png" />

          <strong>{userName}</strong>
          <span>Full Stack Developer</span>
        </div>

        <footer>
          <a href="#" onClick={handleEditName}>
            <PencilLine size={20} />
            Editar nome
          </a>
        </footer>
      </aside>
    </>
  );
}
