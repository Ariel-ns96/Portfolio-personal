export interface About {
  description: string;
}

export interface Projects {
  type: "links" | "artwork" | "all";
  links: ProjectLink[];
  artWork: ProjectArtwork[];
}

export interface ProjectLink {
  id:string;
  icon: string | undefined;
  cover: string | undefined;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  year: string;
  tools: ProjectTools
}
export interface ProjectTools {
  frontend: string[];
  backend: string[];
  database: string[];
}


export interface ProjectArtwork {
  id:string;
  image: string;
  title: string;
  description: string;
  year: string;
}

export interface WorkExperience {
  id:string;
  start: string;
  end: string;
  title: string;
  workType: "Remote" | "Office" | "Hybrid"|null;
  description: string;
}

export interface Connect {
  id:string;
  icon:string | undefined;
  mediaName: string;
  nickName: string;
  link: string;
}

export interface Section<T> {
  id: string;
  label: string;
  visible: boolean;
  data: T;
}

export interface User {
  id: string;
  name: string;
  subTitle: string;
  avatar: string | undefined;
  sections: Section<any>[];
}


export const exampleUser: User = {
  id: "user-1",
  name: "Ariel Solla",
  subTitle: "Analista de sistemas - Desarrollador Frontend",
  avatar: undefined,
  sections: [
    {
      id: "about",
      label: "About",
      visible: true,
      data: "Soy graduado en Análisis de Sistemas y desarrollador front-end, enfocado en crear aplicaciones web interactivas y bien estructuradas. Me gusta combinar diseño y lógica para construir productos funcionales para la experiencia del usuario, siempre aprendiendo nuevas tecnologías y mejorando mis habilidades."
   },
    {
      id: "projects",
      label: "Projects",
      visible: true,
      data: {
        type: "links",
        links: [
          {
            id: "1",
            icon: "/pokeIcon.png",
            slug: "poke-catch",
            title: "Poke Catch",
            subtitle: "¡Atrápalos a todos!",
            description: "Poke Catch es una aplicación web de colección de Pokémon. Los usuarios cuentan con una cantidad limitada de tiradas cada cierto tiempo, donde aparecen Pokémon de forma aleatoria. Cada Pokémon tiene un nivel de rareza que determina la probabilidad de captura. Los Pokémon obtenidos se registran automáticamente en una Pokédex personal con su información, junto con una Pokédex exclusiva para Pokémon shiny. Además, el proyecto incluye un leaderboard global donde se muestran todos los jugadores registrados, fomentando la competencia y la rejugabilidad.",
            year: "2024",
            link: "https://poke-catch-front.vercel.app",
            cover: "/imageWeb.png",
            tools: {
              frontend: ["React", "TypeScript", "Tailwind CSS", "Material UI"],
              backend: ["Node.js", "Firebase Auth"],
              database: ["MongoDB Atlas"],
            },
          },
          {
            id: "2",
            icon: "/placeholder.webp",
            slug: "portfolio-personal",
            title: "Portfolio personal ",
            subtitle: "Portfolio web interactivo",
            description: "Este proyecto es mi portfolio personal desarrollado como una aplicación web interactiva. La idea principal no es solo mostrar información estática, sino permitir la edición y gestión de mi contenido directamente desde la interfaz: agregar, modificar o eliminar proyectos, secciones y datos personales. Incluye soporte para múltiples idiomas, modo claro/oscuro y una estructura modular que me permite actualizar el portfolio de forma flexible. El objetivo es mostrar mis trabajos mientras demuestro mis habilidades en desarrollo frontend, lógica de aplicación y construcción de interfaces dinámicas.",
            year: "2025",
            link: "https://portfolio-arielsolla.vercel.app/",
            cover: "/portf.png",
            tools: {
              frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
              backend: [],
              database: [],
            },
          }
        ],
        artWork: [
          {
            id: 1,
            image: "/artwork/lago-atardecer-montañasFondo-1000x1000.jpg",
            title: "Lago al atardecer",
            description:
              "Un lago tranquilo rodeado de rocas durante el atardecer. El cielo se tiñe de tonos cálidos que se reflejan sobre el agua, creando una escena relajante y natural que transmite calma y amplitud.",
            year: "2024",
          },
          {
            id: 2,
            image: "/artwork/tigre-encerrado-1500x1000.jpg",
            title: "Tigre en cautiverio",
            description:
              "Un primer plano de un tigre en cautiverio. La imagen destaca los detalles del pelaje, los ojos y la expresión del animal, mostrando su tristeza y presencia.",
            year: "2023",
          },
          {
            id: 3,
            image: "/artwork/pasaje-natural-tunel-hojas-1500x1000.jpg",
            title: "Pasaje natural",
            description:
              "Un sendero cubierto por hojas y vegetación que forma un túnel natural. La luz se filtra entre los árboles e ilumina el camino, generando una escena agradable y envolvente.",
            year: "2025",
          },
          {
            id: 4,
            image: "/artwork/montaña-nevada1800x770.jpg",
            title: "Montañas nevadas",
            description:
              "Una vista amplia de la cima de una montaña cubierta de nieve. El paisaje resalta la inmensidad del entorno y la tranquilidad que transmiten los espacios abiertos.",
            year: "2023",
          },
          {
            id: 5,
            image: "/artwork/atardecer-playa-tablaSurfEnArena-1200x900.jpg",
            title: "Atardecer en la playa",
            description:
              "Una tabla de surf apoyada en la arena mientras el sol desciende sobre el mar. La luz calida del sol sobre cielo y el reflejo en el agua y en la arena acompañan una escena simple y agradable.",
            year: "2024",
          },
          {
            id: 6,
            image: "/artwork/silueta-mirando-cielo-estrellado-1600x900.jpg",
            title: "Bajo el cielo estrellado",
            description:
              "La silueta de una persona observando un cielo nocturno lleno de estrellas. La imagen muestra un momento tranquilo de observación y conexión con el paisaje nocturno.",
            year: "2025",
          },
        ]
      },
    },
    {
      id: "workExp",
      label: "Work Experience",
      visible: true,
      data: [
        {
          id:"1",
          start: "2016",
          end: "2020",
          title: "Asistente de ventas | LGI S.A.",
          workType: "Office",
          description: "Apoyo en atención al cliente, preparación de pedidos y gestión de entregas y cobranzas.",
        },
        {
          id:"2",
          start: "2020",
          end: "2021",
          title: "Manejo de plataforma Ecommerce",
          workType: "Remote",
          description: "Subida y gestión de productos en 'Electronic Things', incluyendo imágenes, precios y detalles de cada artículo."
        },
        {
          id:"3",
          start: "2021",
          end: "2021",
          title: "Servicio técnico Streaming Festival Borges 2021",
          workType: "Remote",
          description: "Coordinación y transmisión de charlas en YouTube con StreamYard, creación de HUDs y carteles para los streams, y control técnico general.",
        },
        {
          id:"4",
          start: "2022",
          end: "2023",
          title: "Vendedor independiente en Mercado Libre",
          workType: "Remote",
          description: "Gestión y publicación de productos en Mercado Libre, incluyendo imágenes, precios y descripciones.",
        },
        {
          id:"5",
          start: "2023",
          end: "Present",
          title: "Desarrollador FrontEnd | RTI Latina",
          workType: "Hybrid",
          description: "Desarrollo y diseño de aplicaciones e interfaces con React.js y Java, incluyendo mantenimiento y revisión de código.",
        },
      ],
    },
    {
      id: "connect",
      label: "Connect",
      visible: true,
      data: [
        {
          id:"1",
          icon: "linkedin",
          mediaName: "LinkedIn",
          nickName: "Ariel Solla",
          link: "https://www.linkedin.com/in/ariel-solla/",
        },
        {
          id:"2",
          icon: "github",
          mediaName: "GitHub",
          nickName: "Ariel-ns96",
          link: "https://github.com/Ariel-ns96",
        },
        {
          id:"3",
          icon: "gmail",
          mediaName: "Gmail",
          nickName: "ariel.solla96@gmail.com",
          link: "mailto:ariel.solla96@gmail.com",
        },
      ],
    },
  ],
};
