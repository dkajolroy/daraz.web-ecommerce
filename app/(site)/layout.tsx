import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "@/source/components/footer/footer";
import Navbar from "@/source/components/header/navbar";
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
