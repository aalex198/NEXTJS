import Link from "next/link";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      this is header
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/about">Обо мне</Link>
          </li>
          <li>
            <Link href="/blog">Мой блог</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
