import { Montserrat } from "@next/font/google";
import Link from "next/link";
import styles from "./rootStyle.module.css";
import "./global.css";

const openSans = Montserrat({
  subsets: ["latin"],
  weigh: [100],
});

export default function RootLayout({ children }) {
  return (
    <html className={openSans.className}>
      <head />
      <body>
        <header>
          <h1>
            {" "}
            <Link className={styles.homeLink} href="/home">
              {" "}
              Globomantics{" "}
            </Link>{" "}
          </h1>
          <h3>
            {" "}
            <Link className={styles.homeLink} href="/blog">
              {" "}
              Blog{" "}
            </Link>
          </h3>
          <h3>
            {" "}
            <Link className={styles.homeLink} href="/settings">
              {" "}
              Settings{" "}
            </Link>{" "}
          </h3>
          <h3>
            {" "}
            <Link className={styles.homeLink} href="/conference">
              {" "}
              Comference{" "}
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  );
}
