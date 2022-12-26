export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/fon.png",
      name: "Felipe Gomes",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifólio.",
      },
      { type: "link", content: "Projetos" },
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
      { type: "link", content: "Projetos" },
    ],
    publishedAt: new Date("2022-12-23 16:30:00"),
  },
];
