"use client";
import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Email validation
  const emailValidation = () => {
    return String(formData.email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Enable button only if all fields are filled
  useEffect(() => {
    const { username, phoneNumber, email, message } = formData;
    if (
      username.trim() &&
      phoneNumber.trim() &&
      email.trim() &&
      message.trim()
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrMsg(""); // remove error message on typing
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (formData.username === "") {
      setErrMsg("Name is required!");
    } else if (formData.phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (formData.email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation()) {
      setErrMsg("Give a valid Email!");
    } else if (formData.message === "") {
      setErrMsg("Message is required!");
    } else {
      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await res.json();
        if (res.status === 200) {
          setSuccessMsg(
            `Thank you dear ${formData.username}, your message has been sent successfully!`,
          );
          setErrMsg("");
          setFormData({
            username: "",
            phoneNumber: "",
            email: "",
            message: "",
          });

          setTimeout(() => setSuccessMsg(""), 3000);
        } else {
          setErrMsg(result.message || "Failed to send the message");
        }
      } catch (error) {
        setErrMsg("An error occurred while sending the message.");
      }
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full px-10 sml:px-16 md:px-12 mdl:px-16 lg:px-20 lgl:px-16">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-y-10">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-5"
              onSubmit={handleSend}
            >
              {errMsg && (
                <p className="py-2 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-sm tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-2 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-sm tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}

              <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10">
                {/* Name */}
                <div className="w-full lgl:w-1/2 flex flex-col gap-1">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name <span className="text-red-500">*</span>
                  </p>
                  <input
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                    className="contactInput h-10"
                    type="text"
                  />
                </div>

                {/* Phone Number */}
                <div className="w-full lgl:w-1/2 flex flex-col gap-1">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number <span className="text-red-500">*</span>
                  </p>
                  <input
                    name="phoneNumber"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    className="contactInput h-10"
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email <span className="text-red-500">*</span>
                </p>
                <input
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="contactInput h-10"
                  type="email"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message <span className="text-red-500">*</span>
                </p>
                <textarea
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  className="contactTextArea"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>

              {/* Send Button */}

              <div className="w-full">
                <button
                  type="submit"
                  disabled={isButtonDisabled}
                  className={`w-full h-10 flex items-center justify-center gap-2 ${
                    isButtonDisabled
                      ? "bg-designColor cursor-not-allowed"
                      : "bg-designColor hover:bg-pink-700"
                  } rounded-lg text-base text-white tracking-wide font-medium uppercase duration-300`}
                >
                  <FiSend className="text-white font-medium" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
