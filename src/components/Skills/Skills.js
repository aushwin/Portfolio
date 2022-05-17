import SkillTile from "./SkillTile";
import { FaNodeJs,FaReact,FaHtml5,FaCss3Alt,FaNpm,FaYarn,FaGithubSquare,FaPython } from "react-icons/fa";
import {SiJavascript,SiMongodb,SiCplusplus} from 'react-icons/si'
import {IoIosGitBranch} from 'react-icons/io'
const Skills = ({ link }) => {
  return (
    <div id={link} className="grid grid-cols-4 gap-3">
      <SkillTile onhover='hover:text-red-600' icon={<FaHtml5 className="text-6xl "/>} />
      <SkillTile onhover='hover:text-blue-600' icon={<FaCss3Alt className="text-6xl "/>} />
      <SkillTile onhover='hover:text-yellow-600'  icon={<SiJavascript className="text-6xl "/>} />
      <SkillTile onhover='hover:text-blue-400' icon={<FaReact className="text-6xl "/>} />
      <SkillTile onhover='hover:text-green-600'  icon={<FaNodeJs className="text-6xl "/>} />
      <SkillTile onhover='hover:text-red-600' icon={<FaNpm className="text-6xl "/>} />
      <SkillTile onhover='hover:text-blue-400' icon={<FaYarn className="text-6xl "/>} />
      <SkillTile onhover='hover:text-green-700' icon={<SiMongodb className="text-6xl "/>} />
      <SkillTile onhover='hover:text-red-600' icon={<IoIosGitBranch className="text-6xl "/>} />
      <SkillTile onhover='hover:text-white' icon={<FaGithubSquare className="text-6xl "/>} />
      <SkillTile onhover='hover:text-blue-600' icon={<SiCplusplus className="text-6xl "/>} />
      <SkillTile onhover='hover:text-yellow-600' icon={<FaPython className="text-6xl "/>} />
    </div>
  );
};

export default Skills;
