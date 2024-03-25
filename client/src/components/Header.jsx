import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Images/LOGO.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link to="/">
        <img
          src={Logo}
          alt="Flowbite"
          className="lg:w-72 lg:h-10 md:w-40 md:h-10 sm:w-40 sm:h-10 w-30 h-8"
          /// sizes are to be changed on the basis of screen size
        />
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <button className="w-12 h-10 hidden sm:inline" color="gray">
          <FaMoon />
        </button>
        <Link>
          <Button className="bg-red-500">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={'div'}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
