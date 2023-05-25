import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Roboto } from "next/font/google";
import "./globals.css";
import Provider from "./provider/provider";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "World top selling market",
  description: "Bazar.app is the world top e-commerce market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="relative">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
