import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" bg-slate-300 flex justify-center items-center text-3xl p-5">
        <NavLink to='/' className="mr-3 hover:text-violet-600">Home</NavLink>
        <NavLink to='/about' className="mr-3 hover:text-violet-600" >About</NavLink>
        <NavLink to='/contact' className="mr-3 hover:text-violet-600" >Contact</NavLink>
    </nav>
  );
}

export default Header;