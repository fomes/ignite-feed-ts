import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import Comment from "./Comment";
import styles from "./Post.module.css";

interface AuthorProps {
  name: string;
  role: string;
  avatarUrl: string;
}

interface ContentProps {
  type: string;
  content: string;
}

interface PostProps {
  author: AuthorProps;
  publishedAt: Date;
  content: ContentProps[];
}

export default function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["Muito bom"]);
  const [commentText, setCommentText] = useState("");

  const formatDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const formatDateNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, commentText]);
    setCommentText("");
  };

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setCommentText(event.target.value);
  };

  const handleDeleteComment = (comment: string) => {
    const updateComments = comments.filter((item: any) => item !== comment);
    setComments(updateComments);
  };

  const handleInvalidComment = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  };

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img src={author.avatarUrl} />

            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={formatDate} dateTime={publishedAt.toISOString()}>
            {formatDateNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map((item) => {
            if (item.type === "paragraph") {
              return <p key={item.content}>{item.content}</p>;
            }

            if (item.type === "link") {
              return (
                <a href="#" key={item.content}>
                  {item.content}
                </a>
              );
            }
          })}
        </div>

        <form onSubmit={handleSubmit} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            placeholder="Deixe um comentário"
            name="comment"
            value={commentText}
            onChange={handleCommentChange}
            onInvalid={handleInvalidComment}
            required
          />

          <footer>
            <button type="submit" disabled={!commentText}>
              Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((item: any) => {
            return (
              <Comment
                key={item}
                content={item}
                handleDeleteComment={handleDeleteComment}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
