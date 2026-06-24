"use client";

import { GrLocation } from "react-icons/gr";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
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

    if (!data.name || !data.email || !data.message) {
      setError("All the fields are required.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response?.status !== 200) {
        toast.error("Something went wrong, Try again Later");
        return;
      }

      toast.info("Message sent");
    } catch (error) {
      console.log("error", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
      setData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return (
    <section id="contact" className="mx-10 my-30 sm:mx-14 sm:my-50">
      <div className="h-60 w-60 bg-on-primary-fixed rounded-full absolute blur-3xl opacity-50 right-20" />
      <div className="mt-8 flex gap-15 items-center justify-center flex-wrap">
        {/* for text */}
        <div className="w-sm sm:w-1/2 flex gap-8 justify-center flex-col">
          <div className="flex flex-col gap-6 sm:gap-10">
            <h2 className="text-2xl sm:text-4xl font-bold leading-8 sm:leading-10">
              Let's build something <br />{" "}
              <span className="text-primary-container">extraordinary.</span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-400 tracking-normal sm:tracking-wide">
              Whether you have a specific project in mind or just want to chat
              about architecture and automation, I'm always open to connecting.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <PiEnvelopeSimpleLight
                size={38}
                color="red"
                className="bg-on-secondary-fixed p-2 rounded-lg"
              />
              <div className="">
                <p className="text-sm font-light text-gray-400">Email</p>
                <p className="text-sm font-semibold">
                  rakeshkarki135@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <GrLocation
                size={38}
                color="red"
                className="bg-on-secondary-fixed p-2 rounded-lg"
              />
              <div className="">
                <p className="text-sm font-light text-gray-400">Location</p>
                <p className="text-sm font-semibold">Koteshwor, Koteshwor</p>
              </div>
            </div>
            <div className="flex gap-6 sm:gap-8">
              <Link
                href="https://www.facebook.com/rakesh.rakeshkarki"
                target="_blank"
              >
                <FaFacebookF
                  size={45}
                  color="white"
                  className="bg-on-secondary-fixed p-2 rounded-lg"
                />
              </Link>
              <Link href={""} target="_blank">
                {" "}
                <BsTwitterX
                  size={45}
                  color="white"
                  className="bg-on-secondary-fixed p-2 rounded-lg"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rakesh-karki-514527274/"
                target="_blank"
              >
                {" "}
                <FaLinkedinIn
                  size={45}
                  color="white"
                  className="bg-on-secondary-fixed p-2 rounded-lg hover:bg-on-primary-fixed"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* for card */}
        <div className="w-sm sm:w-xl bg-surface-container-lowest border-on-secondary-fixed border rounded-xl shadow-inner shadow-primary-container hover:shadow-lg">
          <div className="m-7 sm:m-10 flex flex-col gap-5 sm:gap-7">
            {error && (
              <p className="text-xs sm:text-sm text-center font-semibold text-primary-container">
                {error}
              </p>
            )}

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
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                type="text"
                name="message"
                value={data.message}
                onChange={handleChange}
                placeholder="How can i help you?"
                className="w-full text-sm text-gray-500 bg-surface-container-low border-gray-800 outline-on-secondary-fixed focus:outline-3 border rounded-xl px-4 p-3"
                rows={5}
              />
            </div>
            <div className="flex flex-col gap-1">
              <button
                onClick={handleSubmit}
                className={`text-sm font-bold bg-primary-container rounded-xl py-2 sm:py-3 transition-all duration-500 ${loading ? "cursor-not-allowed " : "cursor-pointer hover:bg-on-primary-fixed"}`}
              >
                <span className="flex items-center justify-center">
                  {loading ? (
                    <div className="h-5.5 w-5.5 border-on-primary-fixed rounded-full border-5 transition-all duration-300 animate-spin border-t-transparent" />
                  ) : (
                    "Send Message"
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
