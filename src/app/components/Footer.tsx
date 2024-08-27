import Link from "next/link";
import Image from "next/image";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="text-center p-8 border-t-2 border-primary mt-auto">
      <div className="grid place-items-center gap-6 md:flex flex-wrap">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt={"ZimPak logo"}
            width={200}
            height={50}
          />
        </Link>
        <div className="grid gap-1">
          <a href="tel:+923004279001" className="flex gap-2">
            <PhoneIphoneIcon /> <p>+92 300 427 9001</p>
          </a>
          <a href="tel:+923021533331" className="flex gap-2">
            <PhoneIphoneIcon /> <p>+92 302 153 3331</p>
          </a>
          <a href="mailto:info@zimpak.net" className="flex gap-2">
            <MailIcon />
            <p>info@zimpak.net</p>
          </a>
          <a href="mailto:shouban.akter@yahoo.com" className="flex gap-2">
            <MailIcon />
            <p>shouban.akter@yahoo.com</p>
          </a>
          <a href="https://zimpak.net" className="flex gap-2">
            <LanguageIcon />
            <p>www.zimpak.net</p>
          </a>
          <a href="#" className="flex gap-2">
            <LocationOnIcon />
            <p className="break-words text-left">
              Street#2 Al-Siraj Park, Mominpura, Lahore.
            </p>
          </a>
        </div>
      </div>
      <div className="mt-8">
        <p>Copyright © ZimPak {new Date().getFullYear()}</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
