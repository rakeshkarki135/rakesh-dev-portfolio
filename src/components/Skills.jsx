import { mySkills } from "@/utils/data";

const Skills = () => {
  return (
    <section id="skills" className="mx-10 my-20 overflow-hidden relative">
      <div className="h-70 w-70 bg-on-primary-fixed rounded-full absolute blur-3xl opacity-50 right-10 top-10" />
      <div className="flex gap-15 flex-col items-center">
        {/* for title */}
        <div className="flex gap-2 flex-col items-center">
          <h1 className="text-xl sm:text-4xl font-bold">Technical Arsenal</h1>
          <p className="text-sm sm:text-lg text-gray-400 tracking-normal sm:tracking-wider">
            Modern tools and frameworks for full-cycle development
          </p>
        </div>

        {/* for cards */}
        <div className="flex gap-8 items-center justify-center flex-wrap ">
          {mySkills.map((skill, index) => (
            <Card skill={skill} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

import { PiDatabaseDuotone } from "react-icons/pi";
import { RiLayout6Line } from "react-icons/ri";
import { AiFillDatabase } from "react-icons/ai";
import { BsTerminalFill } from "react-icons/bs";
import { WiStars } from "react-icons/wi";

const Card = ({ skill }) => {
  return (
    <div className="w-65 sm:w-80 px-6 py-9 sm:px-10 sm:py-13 flex flex-col gap-6 bg-surface-container-lowest rounded-xl border-on-secondary-fixed border shadow-inner shadow-primary-container hover:shadow-lg">
      {/* title */}
      <div className="flex gap-4 items-center justify-center">
        {skill.title === "Backend" && (
          <PiDatabaseDuotone
            size={50}
            color="red"
            className="bg-on-secondary-fixed p-2 rounded-lg"
          />
        )}
        {skill.title === "Frontend" && (
          <RiLayout6Line
            size={45}
            color="red"
            className="bg-on-secondary-fixed p-2 rounded-lg"
          />
        )}
        {skill.title === "Database" && (
          <AiFillDatabase
            size={45}
            color="red"
            className="bg-on-secondary-fixed p-2 rounded-lg"
          />
        )}
        {skill.title === "Tools" && (
          <BsTerminalFill
            size={45}
            color="red"
            className="bg-on-secondary-fixed p-2 rounded-lg"
          />
        )}
        {skill.title === "AI Tools" && (
          <WiStars
            size={45}
            color="red"
            className="bg-on-secondary-fixed p-2 rounded-lg"
          />
        )}
        <h1 className="text-lg sm:text-3xl font-bold">{skill?.title}</h1>
      </div>

      {/* tool list */}
      <div className="h-40 sm:h-50 flex justify-between flex-col gap-4">
        <div className="flex gap-2 justify-center flex-wrap">
          {skill?.skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm px-4 text-gray-500 font-semibold py-1 bg-black/35 border-on-secondary-fixed border rounded-xl transition-all duration-500 hover:animate-bounce"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* skill bar */}
        <div className="h-2 bg-black rounded-xl relative flex items-end">
          <div
            style={{ width: `${skill?.confidence}%` }}
            className={`h-1.5 bg-primary-container rounded-xl z-auto`}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
