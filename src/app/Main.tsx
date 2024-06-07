'use client'
import { FC, useEffect, useState } from 'react';
import style from './Main.module.scss';
import { ReputationItem } from "../components/ReputationItem";
import axios from 'axios';
import { BASE_URL } from '@/api/interceptors';
import { IReputations } from '@/types/reputations.types';

interface MainProps {
  reputations: IReputations[];
}

export const Main: FC<MainProps> = ({ reputations }) => {
  const [reputationData, setReputationData] = useState<IReputations[]>(reputations || []);

  const fetchReputationData = async () => {
    try {
      const response = await axios.get<{ reputations: IReputations[] }>(`${BASE_URL}/Info/employer-reputation`);
      setReputationData(response.data.reputations);
    } catch (error) {
      console.error('Error fetching reputation data:', error);
    }
  };

  useEffect(() => {
    if (reputationData.length === 0) {
      fetchReputationData();
    }
  }, [reputationData.length]);

  return (
    <main className={style.main}>
      <section className={style.information}>
        <div className={style.container}>
          <h1>Репутація роботодавця</h1>
        </div>
      </section>
      <section className={style.reputation}>
        <div className={style.container}>
          <div className={style.reputationList}>
            {reputationData.length ? reputationData.map((reputation) => (
              <ReputationItem key={reputation.id} reputation={reputation} />
            )) : <div>Reputations not found!</div>}
          </div>
        </div>
      </section>
    </main>
  );
}
