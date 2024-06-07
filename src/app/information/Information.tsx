'use client'

import { IReputations } from '@/types/reputations.types';
import style from './Information.module.scss';

interface InformationProps {
  reputations: IReputations[];
}

export function Information ({reputations}:InformationProps) {
  return (
  <main className={style.main} style={{backgroundColor: 'rgb(243 244 246)'}}>
    <section className={style.information}>
      <div className={style.container}>
        <h1>Інформація про рейтинг</h1>
      </div>
    </section>
    <section className=''>
      <div className={style.container}>
        <p>Система рейтингу університетів QS World Rankings оцінює університети за різними показниками, що дозволяє створити комплексний рейтинг навчальних закладів у світі. Цей рейтинг використовує 9 показників для знаходження оцінки унверситетів. Наш сайт допомогає вносити дані для нашого університету в файл, щоб можна було єфективніше та легше вносити дані до документу, який відправляється щорічно до QS World University Rankings. Нижче надано опис основних критеріїв за яким відбувається оцінювання </p>
      </div>
    </section>
    <section className={style.whatIsRating}>
      
    <div className={style.container}>
      <ul role="list" className="divide-y divide-gray-100">
      {reputations.map((reputation) => (
        <li className="justify-between gap-x-6 py-5">
          <div className="">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={reputation.logoUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{reputation.title}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <div className="text-sm leading-6 text-gray-900" style={{wordBreak: "break-all", overflowWrap: "break-word", height: "130px"}}>{reputation.description}</div>
          </div>
        </li>
      ))}
      </ul>
    </div>
    </section>
  </main>
  );
}