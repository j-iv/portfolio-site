import Link from "next/link";
import styles from '../styles/NavBar.module.css'
import { Roboto } from "@next/font/google";

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
  return (
    <nav className={`${styles.nav_bar} ${roboto.className}`}>
      <div>
        Jishnu&apos;s Site
      </div>
      <ul className={styles.nav_itemList}>
        {navLinks.map((link, idx) => {
          return (
            <li className={styles.nav_item} key={idx}>
              <Link href={link.path}>{link.name} </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
