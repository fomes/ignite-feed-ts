import Header from "./components/Header";
import Post from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import Sidebar from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/fomes.png",
      name: "Felipe Gomes",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifólio.",
      },
      { type: "link", content: "felipe.com/projects" },
    ],
    publishedAt: new Date("2022-12-22 16:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/fom.png",
      name: "Fom Dev",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifólio.",
      },
      { type: "link", content: "fomes.com/projects" },
    ],
    publishedAt: new Date("2022-12-23 16:30:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((item) => {
            return (
              <Post
                key={item.id}
                author={item.author}
                content={item.content}
                publishedAt={item.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
