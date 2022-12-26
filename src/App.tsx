import Header from "./components/Header";
import Post from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import Sidebar from "./components/Sidebar";
import { posts } from "./data/posts";

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
