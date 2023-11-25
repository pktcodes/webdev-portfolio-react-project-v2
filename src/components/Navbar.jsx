import { navLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element flex flex-col py-4 sm:flex-row sm:items-center sm:gap-x-16 sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x-3 ">
          {navLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="text-lg capitalize tracking-wide duration-300 hover:text-emerald-600"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
