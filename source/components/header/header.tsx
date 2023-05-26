import { headerLinks } from "@/source/constant/data";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-slate-200 sm:block hidden">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center">
          {headerLinks.map((link, index) => (
            <Link
              key={index}
              className="text-xs hover:text-primary py-1 px-2 hover:decoration-solid hover:decoration-1 hover:underline hover:decoration-primary"
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
