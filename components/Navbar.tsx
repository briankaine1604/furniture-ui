import { Container } from "./container";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-white h-24 w-full mx-auto z-50 shadow">
      <Container className="flex justify-between items-center ">
        <div className="text-xl md:text font-bold max-w-28">
          Furniture Gallery
          <div className="flex">
            <div className="w-4 h-[3px] bg-black" />
            <div className="h-[12px] w-[3px] bg-black" />
          </div>
        </div>
        <div className="flex h-full items-center text-md md:text-xl gap-x-10 md:gap-x-16 ml-auto">
          <span className="hover:border-black border-b-2 border-white hover:cursor-pointer hover:transition duration-200 ease-in-out">
            Projects
          </span>
          <span className="hover:border-black border-b-2 border-white hover:cursor-pointer hover:transition duration-200 ease-in-out">
            About
          </span>
          <span className="hover:border-black border-b-2 border-white hover:cursor-pointer hover:transition duration-200 ease-in-out">
            Contact
          </span>
        </div>
      </Container>
    </nav>
  );
};
