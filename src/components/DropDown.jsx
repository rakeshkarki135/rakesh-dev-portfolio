import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const DropDown = ({ selected, setSelected }) => {
  const options = [
    {
      label: "Web Apps",
      value: "wEB_APPS",
    },
    {
      label: "Frontend Development",
      value: "FRONTEND_DEVELOPMENT",
    },
    {
      label: "API Development",
      value: "API_DEVELOPMENT",
    },
    {
      label: "RAG and AI-Agents",
      value: "RAG_AND_AI_AGENTS",
    },
    {
      label: "Web Scraping",
      value: "WEB_SCRAPING",
    },
    {
      label: "Others",
      value: "OTHERS",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="w-full text-sm text-gray-500 bg-surface-container-low border-gray-800 border rounded-xl p-3"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="flex items-center justify-between">
          <p>{selected?.label || "Select project type"}</p>
          {open ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
        </span>
      </button>

      {open && (
        <div className="w-full text-sm text-gray-500 bg-surface-container-low border-on-primary-fixed border-2  rounded-xl p-3 mt-2 absolute z-50 shadow-primary-container hover:shadow-lg tracking-wide">
          {options.map((option, index) => (
            <p
              key={index}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="w-full text-sm border-on-primary-fixed not-last:border-b p-2 cursor-pointer hover:text-primary-container tracking-wide"
            >
              {option.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
