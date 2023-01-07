import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import { Roboto } from "@next/font/google";
import { useState } from "react";
import Image from "next/image";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];
export default function NavBar() {
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <nav className={`${styles.nav_bar} ${roboto.className}`}>
      <span className={styles.nav_bar_left}>
        <span>
          <a
            href={`https://github.com/j-iv`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.svg" alt="Github logo" width={20} height={20} />
          </a>
        </span>
        <span>Jishnu&apos;s Site</span>
      </span>

      <ul className={styles.nav_itemList}>
        {navLinks.map((link, idx) => {
          return (
            <li
              className={`${styles.nav_item} ${
                idx == activeIdx ? styles.nav_item_active : ""
              }`}
              key={idx}
            >
              <Link href={link.path} onClick={() => setActiveIdx(idx)}>
                {link.name}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
