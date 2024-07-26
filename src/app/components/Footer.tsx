const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="text-center p-8 border-t-2 border-primary mt-auto">
      <p>Copyright © ZimPak {new Date().getFullYear()}</p>
      <p>All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
