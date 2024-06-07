'use client'

import style from './Information.module.scss';

export function Information () {
  return (
  <main className={style.main}>
    <section className={style.information}>
      <div className={style.container}>
        <h1>Інформація про рейтинг</h1>
      </div>
    </section>
    <section className={style.whatIsRating}>
      <div className={style.container}>
        <h1>Що таке рейтинг вузів та як він оцінююється?</h1>
        <p>текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>
        <div className={style.rating}>
        <div className={style.item}>
          <div className={style.circle}>18</div>
          <div>Загалом</div>
        </div>
          <div>Опис</div>
        </div>
      </div>
    </section>
  </main>
  );
}