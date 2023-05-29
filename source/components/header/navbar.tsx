import Image from "next/image";
import Header from "./header";
import ToggleMenu from "./toggleMenu";
import SearchInput from "@/source/components/header/searchInput";
import Link from "next/link";
import MobileMenu from "@/source/components/header/mobileMenu";
import React from "react";
import CartItem from "@/source/components/header/cartItem";

type Props={
  activeNav:{
  nav:Boolean,
  menu:Boolean
      hover:Boolean
  },
    setActiveNav: React.Dispatch<React.SetStateAction<{nav: boolean, menu: boolean, hover: boolean}>>
}
function Navbar({activeNav,setActiveNav}:Props) {
  return (
    <nav className={`bg-white transition-all w-full ${activeNav.nav?"fixed z-50 shadow-lg w-full top-0 left-0":""}`}>
        {
            !activeNav.menu?
        <Header />:null
        }
      <div className={`relative container`}>
      <div className={`md:grid  bg-white md:grid-cols-12 flex flex-col-reverse py-2  gap-2`}>
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
              <div className={`block ${activeNav.menu?"md:block":"md:hidden"}`}>
                  <MobileMenu setActiveNav={setActiveNav} activeNav={activeNav}/>
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
              <Link href="/cart" className="bucket cursor-pointer text-2xl relative flex px-2 justify-center md:flex-1">
                <i className="bi bi-cart2"></i>
                 <CartItem/>
              </Link>
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
          {
              activeNav.menu?
                  <div
                     className="md:flex hidden py-1  cursor-pointer items-center gap-2 text-slate-600">
                      <div
                          onMouseEnter={()=>{
                              setActiveNav((s)=>({...s,hover:true}))
                          }}
                          className="flex gap-2 items-center"
                      >
                      <span>Category</span>
                      <i className="bi bi-caret-down flex items-center"></i>
                      </div>
                  </div>:null
          }
      </div>
    </nav>
  );
}

export default Navbar;
