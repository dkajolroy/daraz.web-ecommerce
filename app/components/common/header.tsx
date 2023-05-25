import { headerLinks } from "@/app/constant/data";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-slate-200">
      <div className="container">
        <div className="flex  justify-between items-center">
          {headerLinks.map((link) => (
            <>
              <Link
                className="text-xs hover:text-primary py-1 px-2 hover:decoration-solid hover:decoration-1 hover:underline hover:decoration-primary"
                href={link.url}
              >
                {link.title}
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
