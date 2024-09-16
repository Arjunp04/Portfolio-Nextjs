import dynamic from "next/dynamic";

// Dynamically import components
const Banner = dynamic(() => import("./components/banner/Banner"));
const Projects = dynamic(() => import("./components/projects/Projects"));
const Contact = dynamic(() => import("./components/contact/Contact"));
const Resume = dynamic(() => import("./components/resume/Resume"));

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-black">
      <Banner />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
