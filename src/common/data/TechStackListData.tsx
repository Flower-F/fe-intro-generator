import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiLess,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNginx,
  SiDocker,
  SiGitee,
  SiWebpack,
  SiVite,
} from 'react-icons/si';

interface ITechStack {
  title: string;
  icon: JSX.Element;
  color: string;
}

export const techStackListData: ITechStack[] = [
  {
    title: 'HTML',
    icon: <SiHtml5 />,
    color: '#f16528',
  },
  {
    title: 'CSS',
    icon: <SiCss3 />,
    color: '#0170b6',
  },
  {
    title: 'JavaScript',
    icon: <SiJavascript />,
    color: '#f1da4e',
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript />,
    color: '#017acc',
  },
  {
    title: 'React',
    icon: <SiReact />,
    color: '#65cde4',
  },
  {
    title: 'Vue',
    icon: <SiVuedotjs />,
    color: '#41b784',
  },
  {
    title: 'Angular',
    icon: <SiAngular />,
    color: '#c50030',
  },
  {
    title: 'Sass',
    icon: <SiSass />,
    color: '#cc6699',
  },
  {
    title: 'Less',
    icon: <SiLess />,
    color: '#384976',
  },
  {
    title: 'Tailwindcss',
    icon: <SiTailwindcss />,
    color: '#16b7b9',
  },
  {
    title: 'Webpack',
    icon: <SiWebpack />,
    color: '#8fd6fa',
  },
  {
    title: 'Vite',
    icon: <SiVite />,
    color: '#42b783',
  },
  {
    title: 'Node.js',
    icon: <SiNodedotjs />,
    color: '#91c53f',
  },
  {
    title: 'Git',
    icon: <SiGit />,
    color: '#f05133',
  },
  {
    title: 'Github',
    icon: <SiGithub />,
    color: '#000000',
  },
  {
    title: 'Gitee',
    icon: <SiGitee />,
    color: '#c71d23',
  },
  {
    title: 'Gitlab',
    icon: <SiGitlab />,
    color: '#e63936',
  },
  {
    title: 'Nginx',
    icon: <SiNginx />,
    color: '#009b00',
  },
  {
    title: 'Docker',
    icon: <SiDocker />,
    color: '#026fb3',
  },
];
