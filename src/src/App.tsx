import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post.tsx";
import { Sidebar } from "./components/Sidebar.tsx";
import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fabriciogomesdev.png',
      name: 'Fabricio Gomes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-12-03 05:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-11-10 20:00:00'),
  },
]
export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(posts => {
            return (
              <Post
                key={posts.id}
                post={posts}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}


