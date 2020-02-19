const Header = props => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white border-b-2 border-black navigation px-5 pt-5 pb-2">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight hover:text-gray-600">
          <a href="/">Letters From Bowling Green</a>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="about"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 mr-4"
          >
            About
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 mr-4"
          >
            Search
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
