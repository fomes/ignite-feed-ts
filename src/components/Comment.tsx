import { ThumbsUp, Trash } from "phosphor-react";
import React, { useState } from "react";
import styles from "../components/Comment.module.css";
import Avatar from "./Avatar";

interface CommentProps {
  content: string;
  handleDeleteComment: (comment: string) => void;
}

export default function Comment({
  content,
  handleDeleteComment,
}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const deleteComment = () => {
    handleDeleteComment(content);
  };

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/fomes.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Gomes</strong>
              <time
                title="17 de Dezembro às 10:40h"
                dateTime="2022-12-17 10:40:00"
              >
                Publicado há 1h
              </time>
            </div>

            <button title="Deletar comentário" onClick={deleteComment}>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
