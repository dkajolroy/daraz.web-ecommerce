import React from "react";
import Navbar from "../components/common/navbar";
type Props = { children: React.ReactNode };
function SiteLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default SiteLayout;
