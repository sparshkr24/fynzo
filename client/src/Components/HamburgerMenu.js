import logo from '../assets/logo.jpg';
import cross from '../assets/cross.svg';

const HamburgerMenu = ({isOpen, setIsOpen}) => {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
      <div
        className={`${
          isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } p-6 fixed top-0 left-0 z-30 w-full overflow-y-auto bg-black border-r shadow-lg h-full transition duration-300 transform`}
      >
        <div className="flex justify-between items-center">
          <div>
            <img
              src={logo}
              className="hover:cursor-pointer"
              alt="logo"
              width={140}
              height={"auto"}
            />
          </div>
          <div>
            <img
              src={cross}
              onClick={toggleMenu}
              className="hover:cursor-pointer"
              alt="logo"
              width={16}
              height={"auto"}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-start items-start">
            <button className="text-sm mb-1 text-white px-3 py-2 hover:bg-white hover:text-black hover:cursor-pointer">Products</button>
            <button className="text-sm mb-1 text-white px-3 py-2 hover:bg-white hover:text-black hover:cursor-pointer">Blog</button>
            <button className="text-sm mb-1 text-white px-3 py-2 hover:bg-white hover:text-black hover:cursor-pointer">Partners</button>
            <button className="text-sm mb-1 text-white px-3 py-2 hover:bg-white hover:text-black hover:cursor-pointer">About</button>
            <button className="text-sm mb-1 text-black border bg-white py-2 px-3 hover:cursot-pointer hover:bg-black hover:text-white hover:border-white">Contact</button>
            <div className="h-px w-full bg-gray-700 mt-2 mb-5"></div>
            <p className="text-xs text-gray-400 my-2">Learn</p>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
