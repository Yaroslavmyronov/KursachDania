'use client'
import style from './ReputationItem.module.scss';

export function ReputationItem () {
  return (
  <main className={style.main}>
    <section className={style.information}>
      <div className={style.container}>
        <div className={style.header}>
          <img className={style.image} src="" alt="" />
          <div className={style.title}>Академічна репутація</div>
        </div>
      </div>
    </section>
    <section className={style.information}>
      <div className={style.container}>
      </div>
    </section>
  </main>
  );
}