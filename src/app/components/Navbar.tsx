import Link from "next/link";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">logo</Link>
      <ul>
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
