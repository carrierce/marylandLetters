const Footer = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white border-black navigation px-5 pt-2 pb-5 mr-6  ">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 mr-4"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
