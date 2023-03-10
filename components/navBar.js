import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import { Roboto } from "@next/font/google";
import { useState, useEffect } from "react";
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
  const [navExpanded, setNavExpanded] = useState(false);
  function handleNavToggle() {
    setNavExpanded(!navExpanded)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navExpanded && !event.target.closest(`.${styles.nav_bar}`)) {
        setNavExpanded(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navExpanded]);
  
  return (
    <nav className={`${styles.nav_bar} ${roboto.className}`}>
      <span className={styles.logo}>
        {/* <span>
          <a
            href={`https://github.com/j-iv`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.svg" alt="Github logo" width={20} height={20} />
          </a>
        </span> */}
        Jishnu&apos;s Site
      </span>
      <span
        className={styles.menu_icon}
        onClick={() => {
          setNavExpanded(!navExpanded);
        }}
      >
        <Image src="/menu.svg" alt="Menu icon" height={20} width={20} />
      </span>
      <ul
        className={`${
          navExpanded
            ? styles.nav_itemList + " " + styles.active
            : styles.nav_itemList
        }`}
      >
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
