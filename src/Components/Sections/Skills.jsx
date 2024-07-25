
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiJest,
  SiPython,
  SiDjango,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiArduino,
  SiVim,
  SiGithub,
  SiTeamcity,
  SiCheckmarx,
} from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
import { RiTeamLine } from "react-icons/ri";
import { TbLogicNand } from "react-icons/tb";
import { FaRobot, FaImage, FaRegLightbulb } from "react-icons/fa";
import { IconContext } from "react-icons";

const skillsData = {
  "Front-End Development": [
    { name: "React.JS", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Material-UI", icon: DiMaterializecss },
    { name: "Redux", icon: SiRedux },
    { name: "Jest", icon: SiJest },
  ],
  "Back-End Development": [
    { name: "Python Django", icon: SiPython },
    { name: "Express", icon: SiExpress },
    { name: "Node.JS", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
  ],
  Hardware: [
    { name: "Arduino", icon: SiArduino },
    { name: "Verilog", icon: TbLogicNand },
    { name: "VHDL", icon: SiVim },
  ],
  Miscellaneous: [
    { name: "Git", icon: SiGithub },
    { name: "Machine learning", icon: FaRobot },
    { name: "Image Processing", icon: FaImage },
  ],
  "Soft Skills": [
    { name: "Team player", icon: RiTeamLine },
    { name: "Problem solver", icon: FaRegLightbulb },
    { name: "Deliver results", icon: SiCheckmarx },
  ],
};

const Skills = () => {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <div className="skills-section m-auto w-[90%]">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skills-category p-5">
            <h3 className="my-4 text-lg font-bold">{category}</h3>
            <div className="flex flex-wrap justify-evenly gap-5">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item flex h-12 w-48 items-center justify-center rounded-full bg-white dark:bg-black border border-black dark:border-white transition-all duration-300 hover:scale-110 hover:cursor-default"
                >
                  <skill.icon className="mr-2 text-xl" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </IconContext.Provider>
  );
};

export default Skills;
