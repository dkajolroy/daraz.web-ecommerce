import React from "react";
import Footer from "@/source/components/footer/footer";
import Navbar from "@/source/components/header/navbar";
import "swiper/css";
import "swiper/css/pagination";

type Props = { children: React.ReactNode };
function SiteLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default SiteLayout;
