import style from './Header.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
   <header className={style.header}>
      <div className={style.container}>
        <Link className={style.logo} href='/'>
          LearnLeaders
        </Link>
        <nav className={style.menu}>
        <ul className={style.list}>
          <li className={style.item}>
            <Link className={style.link} href='/'>
              Рейтинг
            </Link>
          </li>
          <li className={style.item}>
            <Link className={style.link} href='/information'>
              Звіт
            </Link>
          </li>
          <li className={style.item}>
            <Link className={style.link} href='/reputation'>
              Репутація
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/auth" className={style.button}>
          <span className={style.buttonText}>Увійти</span>
        </Link>
      </div>
   </header>
  );
}
