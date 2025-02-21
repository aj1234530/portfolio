function Navbar() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center py-5">
      <h1 className="text-2xl font-bold">Abhimanyu Jay</h1>

      <div className="py-4 px-5 gap-4 flex ">
        {/* links */}
        <a href="#home" className="text-secondary-color">
          Home
        </a>
        <a href="#about" className="text-secondary-color">
          About
        </a>
        <a href="#projects" className="text-secondary-color">
          Projects
        </a>
        <a href="#contact" className="text-secondary-color">
          Contact
        </a>
      </div>
      <img
        className="max-w-[243px] md:hidden border rounded-full"
        src="https://nadh.in/static/images/kailash-2024.jpg"
      ></img>
    </div>
  );
}

export default Navbar;
