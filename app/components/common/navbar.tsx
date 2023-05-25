import Image from "next/image";
import Button from "../global/button";
import TextInput from "../global/textInput";
import Header from "./header";

function Navbar() {
  return (
    <nav>
      <Header />
      <div className="grid grid-cols-10 container ">
        <div className="col-span-2">
          <Image src={"/images/logo.png"} width={200} height={100} alt="logo" />
        </div>
        <div className="col-span-6">
          <div className="flex items-center h-full">
            <TextInput placeholder="Search..." />
            <Button
              className="text-white bg-primary"
              title={<i className="bi bi-search"></i>}
            />
          </div>
        </div>
        <div className="col-span-2">
          <Image
            src={"/images/free_delivery.png"}
            width={200}
            height={100}
            alt="logo"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
