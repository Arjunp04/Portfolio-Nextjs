"use client";
import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(formData.email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  // Handle input changes and remove error message when typing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrMsg(""); // Remove error message when typing
  };

  // Handle form submission
 const handleSend = async (e) => {
   e.preventDefault();

   if (formData.username === "") {
     setErrMsg("Username is required!");
   } else if (formData.phoneNumber === "") {
     setErrMsg("Phone number is required!");
   } else if (formData.email === "") {
     setErrMsg("Please give your Email!");
   } else if (!emailValidation(formData.email)) {
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
      //  console.log("api response json :",result)
       if (res.status === 200) {
         setSuccessMsg(
           `Thank you dear ${formData.username}, your message has been sent successfully!`
         );
         setErrMsg("");
         setFormData({
           username: "",
           phoneNumber: "",
           email: "",
           message: "",
         });

         // Hide success message after 3 seconds
         setTimeout(() => {
           setSuccessMsg("");
         }, 3000);
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
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-3">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-3">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    name="phoneNumber"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
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
