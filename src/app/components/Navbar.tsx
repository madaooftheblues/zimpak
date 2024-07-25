import Link from "next/link";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-10">
      <Link href="/">logo</Link>
      <ul className="flex-1 space-x-12 justify-end hidden md:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
