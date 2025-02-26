import Navbar from "../components/Navbar";
import "../App.css";
import TradingApplication from "../components/TradingApplication";
import Skills from "../components/Skills";
import Github from "../components/Github";
import LinkShortenerer from "../components/LinkShortener";
import TypingTestApp from "../components/TypingTestApp";
import MoreProjects from "../components/MoreProjects";
import Footer from "../components/Footer";
import Education from "../components/Education";

function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4 font-garamond bg-gray-50">
      <Navbar />
      <div className="w-full h-full flex flex-col md:flex-row-reverse  p-4 gap-10">
        <div className="md:w-1/3 flex flex-col items-center  ">
          <img
            className="max-w-[300px] h-[200px] border rounded-full filter grayscale"
            src="/profile.png"
            // alt="Profile photo"
          />
          <Github />
          <Skills />
          <Education />
        </div>

        <section id="projects" className="md:w-2/3 ">
          <h1 className="font-bold underline">Projects</h1>
          <TradingApplication />
          <br></br>
          <LinkShortenerer />
          <br></br>
          <TypingTestApp />
          <br></br>
          <MoreProjects />
        </section>

        {/* projects */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
