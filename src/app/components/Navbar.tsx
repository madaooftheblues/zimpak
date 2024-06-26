import { NAV_LINKS } from '../constants';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container py-5 relative z-30">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
