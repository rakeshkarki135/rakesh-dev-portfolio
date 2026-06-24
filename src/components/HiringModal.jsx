import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { useState, useEffect } from "react";
import DropDown from "./DropDown";
import { toast } from "react-toastify";

export const HiringModal = ({ open, setOpenModal }) => {
  if (!open) return;

  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      console.log("data in hiring model", data);
      const submitData = {
        name: data.name,
        email: data.email,
        company: data.company,
        projectType: selected?.label,
        message: data.message,
      };
      const response = await fetch("/api/hire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.status !== 200) {
        toast.error("Something went wrong, Try again later");
        return;
      }

      toast.info(
        "Thanks for reaching out. will give response as soon as possible.",
      );
      setOpenModal(false);
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
      setData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setSelected("");
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <div
      onClick={() => setOpenModal(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-sm sm:w-xl bg-surface-container-lowest border-on-secondary-fixed border rounded-xl shadow-inner shadow-primary-container hover:shadow-lg"
      >
        <div className="m-5 sm:m-10 flex flex-col gap-4 sm:gap-7">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-400">Name</label>
            <span className="relative">
              <IoPersonSharp
                size={15}
                color="red"
                className="absolute bottom-1/2 translate-y-1/2 ml-3"
              />
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full text-sm text-gray-500 bg-surface-container-low border-gray-800 outline-on-secondary-fixed focus:outline-3 border rounded-xl p-3 pl-9"
                required
              />
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-400">Email</label>
            <span className="relative">
              <MdOutlineAlternateEmail
                size={15}
                color="red"
                className="absolute bottom-1/2 translate-y-1/2 ml-3"
              />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                className="w-full text-sm text-gray-500 bg-surface-container-low border-gray-800 outline-on-secondary-fixed focus:outline-3 border rounded-xl p-3 pl-9"
                required
              />
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-400">
              Comapny/Organization
            </label>
            <span className="relative">
              <IoPersonSharp
                size={15}
                color="red"
                className="absolute bottom-1/2 translate-y-1/2 ml-3"
              />
              <input
                type="text"
                name="company"
                value={data.company}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full text-sm text-gray-500 bg-surface-container-low border-gray-800 outline-on-secondary-fixed focus:outline-3 border rounded-xl p-3 pl-9"
                required
              />
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-400">Project Type</label>
            <DropDown selected={selected} setSelected={setSelected} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              type="text"
              name="message"
              value={data.message}
              onChange={handleChange}
              placeholder="Text Message ..."
              className="w-full text-sm text-gray-500 bg-surface-container-low border-gray-800 outline-on-secondary-fixed focus:outline-3 border rounded-xl px-4 p-3"
              rows={5}
            />
          </div>
          <div className="flex flex-col gap-1">
            <button
              onClick={handleSubmit}
              className={`text-sm font-bold  ${loading ? "cursor-not-allowed" : "cursor-pointer hover:bg-on-primary-fixed"} bg-primary-container  rounded-xl py-2 sm:py-3 transition-all duration-500 `}
            >
              <span className="flex items-center justify-center">
                {loading ? (
                  <div className="h-5.5 w-5.5 border-on-primary-fixed rounded-full border-5 transition-all duration-300 animate-spin border-t-transparent" />
                ) : (
                  "Submit"
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringModal;
