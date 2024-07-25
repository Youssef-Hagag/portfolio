import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiJest,
  SiPython,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiArduino,
  SiVim,
  SiGithub,
  SiCheckmarx,
} from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
import { RiTeamLine } from "react-icons/ri";
import { TbLogicNand } from "react-icons/tb";
import { FaRobot, FaImage, FaRegLightbulb } from "react-icons/fa";
import { IconContext } from "react-icons";
import data from "../data.json";

const iconMapping = {
  SiReact: SiReact,
  SiJavascript: SiJavascript,
  SiHtml5: SiHtml5,
  SiCss3: SiCss3,
  SiTailwindcss: SiTailwindcss,
  SiRedux: SiRedux,
  SiJest: SiJest,
  SiPython: SiPython,
  SiExpress: SiExpress,
  SiNodedotjs: SiNodedotjs,
  SiMongodb: SiMongodb,
  SiMysql: SiMysql,
  SiArduino: SiArduino,
  SiVim: SiVim,
  SiGithub: SiGithub,
  SiCheckmarx: SiCheckmarx,
  DiMaterializecss: DiMaterializecss,
  RiTeamLine: RiTeamLine,
  TbLogicNand: TbLogicNand,
  FaRobot: FaRobot,
  FaImage: FaImage,
  FaRegLightbulb: FaRegLightbulb,
};

const Skills = () => {
  const { skills } = data;
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <div className="skills-section m-auto w-[90%]">
        {Object.entries(skills).map(([category, skills]) => (
          <div key={category} className="skills-category px-10">
            <h3 className="my-4 text-lg font-bold">{category}</h3>
            <div className="flex flex-wrap justify-evenly gap-5">
              {skills.map((skill, index) => {
                const IconComponent = iconMapping[skill.icon];
                return (
                  <div
                    key={index}
                    className="skill-item flex h-12 w-48 items-center justify-center rounded-full bg-white dark:bg-black border border-black dark:border-white transition-transform duration-300 hover:scale-110 hover:cursor-default"
                  >
                    {IconComponent && <IconComponent className="mr-2 text-xl" />}
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </IconContext.Provider>
  );
};

export default Skills;
