import Image from "next/image";
import Button from "../global/button";
import TextInput from "../global/textInput";
import Header from "./header";
import ToggleMenu from "./toggleMenu";

function Navbar() {
  return (
    <nav className="bg-white">
      <Header />
      <div className="md:grid md:grid-cols-12 flex flex-col-reverse py-2 container gap-2">
        <div className="col-span-2 hidden  md:flex items-center">
          <Image
            className="w-36"
            src={"/images/logo.png"}
            width={200}
            height={100}
            alt="logo"
          />
        </div>
        <div className="col-span-7">
          <div className="flex h-full w-full items-center">
            <div className="flex w-full">
              <TextInput
                className="text-base rounded-l-sm bg-slate-200 sm:py-2 py-[6px] px-5"
                placeholder="Search in daraz..."
              />
              <Button
                className="text-white  bg-primary px-5 rounded-r-sm"
                title={<i className="bi bi-search"></i>}
              />
            </div>
          </div>
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
