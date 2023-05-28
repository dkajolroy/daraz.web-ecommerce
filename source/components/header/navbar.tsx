import Image from "next/image";
import Header from "./header";
import ToggleMenu from "./toggleMenu";
import SearchInput from "@/source/components/header/searchInput";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white">
      <Header />
      <div className="md:grid md:grid-cols-12 flex flex-col-reverse py-2 container gap-2">
        <Link href="/" className="col-span-2 hidden  md:flex items-center">
          <Image
            className="w-36"
            src={"/images/logo.png"}
            width={200}
            height={100}
            alt="logo"
          />
        </Link>
        <div className="col-span-7">
          <SearchInput/>
        </div>
        <div className="col-span-3 flex items-center">
          <div className="flex gap-2 w-full justify-between items-center">
            <div className="md:hidden flex items-center">
              <ToggleMenu />
              <Image
                className="w-28"
                src={"/images/logo.png"}
                width={200}
                height={100}
                alt="logo"
              />
            </div>
            <div className="bucket text-2xl flex px-2 justify-center md:flex-1">
              <i className="bi bi-cart2"></i>
            </div>
            <div className="flex-2  hidden md:flex h-[45px]">
              <Image
                className="w-auto h-auto"
                src={"/images/free_delivery.png"}
                width={200}
                height={100}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
