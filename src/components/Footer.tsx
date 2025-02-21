const Footer = () => {
  return (
    <footer id="contact" className=" border-t-2 py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()}</p>
        <div className="flex space-x-4 mt-2 md:mt-0 items-center">
          <a
            href="mailto:plzkeepmeposted@gmail.com"
            className="hover:text-gray-400"
          >
            plzkeepmeposted@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
