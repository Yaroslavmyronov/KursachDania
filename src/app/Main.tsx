'use client'
import { FC } from 'react';

import { ReputationItem } from "../components/ReputationItem";
import { IReputations } from '@/types/reputations.types';


interface MainProps {
  reputations: IReputations[];
}

export const Main: FC<MainProps> = ({ reputations }) => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Виберіть тему для внесення даних</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {reputations.map((reputation) => (
              <ReputationItem key={reputation.id} reputation={reputation}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
