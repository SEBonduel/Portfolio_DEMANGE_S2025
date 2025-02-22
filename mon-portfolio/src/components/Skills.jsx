import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaPhp, FaJava, FaDocker, FaGit, FaGithub, FaSass } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiMysql, SiMongodb, SiFlutter, SiFigma , SiScrumalliance } from 'react-icons/si';
const csharpIcon = "src/assets/icons/csharp.svg";
const vscodeIcon = "src/assets/icons/vscode.svg";
import "@fontsource/space-grotesk";

const skills = [
  {
    category: 'Front-end',
    items: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'ReactJS', icon: <FaReact /> },
      { name: 'VueJS', icon: <FaVuejs /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'SASS', icon: <FaSass /> },
    ],
  },
  {
    category: 'Back-end',
    items: [
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C#', icon: <img src={csharpIcon} alt="C#" className="w-8 h-8" /> },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'Flutter', icon: <SiFlutter /> },
    ],
  },
  {
    category: 'Outils & Méthodologies',
    items: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Git', icon: <FaGit /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <img src={vscodeIcon} alt="VS Code" className="w-8 h-8" /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Scrum', icon: <SiScrumalliance /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="p-8 z-[50] bg-[url('../Medias/Project_bg.jpg')] bg-cover bg-center bg-no-repeat font-medium font-orbitron pb-16" id='Skills'>
      <h2 className="text-4xl md:text-6xl font-medium font-orbitron mb-12 mt-8 mb-8">Mes Compétences</h2>
      <div className="grid gap-12">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-2xl text-start font-semibold mb-8 ml-8">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:bg-opacity-50 transition-all "
                  
                >
                  <span className="text-4xl text-blue-500">{skill.icon}</span>
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
