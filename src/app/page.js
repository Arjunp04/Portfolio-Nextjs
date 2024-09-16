import React from "react";
import Banner from "./components/banner/Banner";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";

const Home = () => {
  return (
    <div className=" max-w-screen-xll mx-auto bg-black">
      <Banner />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
