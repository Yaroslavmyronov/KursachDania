import { FC } from 'react';
import Link from 'next/link';
import { IReputations } from '@/types/reputations.types';

interface ReputationItemProps {
  reputation: IReputations;
}

export const ReputationItem: FC<ReputationItemProps> = ({ reputation }) => {
  return (
    <div key={reputation.id} className="group relative" style={{marginBottom: '24px'}}>
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          src={reputation.logoUrl}
          alt=''
          className="h-full w-full object-cover object-center"
        />
        </div>
          <h3 className="mt-3 text-sm text-gray-500">
            <Link  href={`/reputation/${reputation.id}`}>
              <span className="absolute inset-0" text-base font-semibold text-gray-900/>
                {reputation.title}
            </Link>
          </h3>
      </div>
  );
}
